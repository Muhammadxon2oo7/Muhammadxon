"use client";

import { useEffect } from "react";

function hashCode(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}

export default function VisitorTracker() {
  useEffect(() => {
    if (sessionStorage.getItem("visit_sent")) return;
    sessionStorage.setItem("visit_sent", "true");

    const collectAllData = async () => {
      // Canvas Fingerprint
      const getCanvasFP = () => {
        try {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) return "Noma'lum";
          ctx.textBaseline = "top";
          ctx.font = "14px Arial";
          ctx.fillStyle = "#f60";
          ctx.fillRect(125, 1, 62, 20);
          ctx.fillStyle = "#069";
          ctx.fillText("Fingerprint", 2, 15);
          ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
          ctx.fillText("Fingerprint", 4, 17);
          return hashCode(canvas.toDataURL());
        } catch {
          return "Bloklangan";
        }
      };

      // WebGL Fingerprint
      const getWebGLFP = () => {
        try {
          const canvas = document.createElement("canvas");
          const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") || canvas.getContext("webgl2");
          if (!gl) return "Noma'lum";
          const webgl = gl as WebGLRenderingContext;
          const debugInfo = webgl.getExtension("WEBGL_debug_renderer_info");
          const vendor = debugInfo
            ? webgl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
            : webgl.getParameter(webgl.VENDOR);
          const renderer = debugInfo
            ? webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
            : webgl.getParameter(webgl.RENDERER);
          return hashCode(`${vendor}|||${renderer}`);
        } catch {
          return "Bloklangan";
        }
      };

      // Audio Fingerprint
      const getAudioFP = async () => {
        try {
          const OfflineAudioContext = window.OfflineAudioContext || (window as any).webkitOfflineAudioContext;
          if (!OfflineAudioContext) return "Noma'lum";
          const context = new OfflineAudioContext(1, 44100, 44100);
          const oscillator = context.createOscillator();
          oscillator.type = "triangle";
          oscillator.frequency.value = 10000;
          const compressor = context.createDynamicsCompressor();
          oscillator.connect(compressor);
          compressor.connect(context.destination);
          oscillator.start(0);
          const buffer = await context.startRendering();
          const data = buffer.getChannelData(0);
          let hash = 0;
          for (let i = 0; i < data.length; i += 100) hash += data[i];
          return hashCode(hash.toString());
        } catch {
          return "Bloklangan";
        }
      };

      // Batareya
      const batteryInfo = "getBattery" in navigator
        ? await (navigator as any).getBattery().then((b: any) => ({
            level: `${Math.round(b.level * 100)}%`,
            charging: b.charging ? "Ha" : "Yo‘q",
          })).catch(() => ({ level: "Aniqlanmadi", charging: "Aniqlanmadi" }))
        : { level: "Aniqlanmadi", charging: "Aniqlanmadi" };

      // Internet ulanishi (agar mavjud bo‘lsa)
      const connection = "connection" in navigator ? (navigator as any).connection : null;

      const payload = {
        page: window.location.pathname + window.location.search,
        referrer: document.referrer || "To‘g‘ridan-to‘g‘ri",
        userAgent: navigator.userAgent,
        language: navigator.language || "Noma'lum",
        languages: navigator.languages?.join(", ") || "Noma'lum",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Noma'lum",
        time: new Date().toLocaleString("uz-UZ", { timeZoneName: "short" }),
        screen: `${window.screen.width}x${window.screen.height}`,
        colorDepth: window.screen.colorDepth || "Noma'lum",
        deviceType: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "Mobil" : "Kompyuter",
        touchSupport: navigator.maxTouchPoints > 0 ? "Ha" : "Yo‘q",
        cpuCores: navigator.hardwareConcurrency || "Noma'lum",
        deviceMemory: (navigator as any).deviceMemory || "Noma'lum",
        batteryLevel: batteryInfo.level,
        batteryCharging: batteryInfo.charging,
        online: navigator.onLine ? "Ha" : "Yo‘q",
        cookieEnabled: navigator.cookieEnabled ? "Yoqilgan" : "O‘chirilgan",
        connectionType: connection?.type || "Noma'lum",
        effectiveType: connection?.effectiveType || "Noma'lum",
        downlink: connection?.downlink ? `${connection.downlink} Mbps` : "Noma'lum",
        canvasFP: getCanvasFP(),
        webglFP: getWebGLFP(),
        audioFP: await getAudioFP(),
      };

      try {
        await fetch("/api/sendvisit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.warn("Tracker yuborishda xato:", err);
      }
    };

    collectAllData();
  }, []);

  return null;
}