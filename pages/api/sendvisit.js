// pages/api/sendvisit.js

import { UAParser } from "ua-parser-js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const data = req.body || {};

  if (/bot|crawler|spider|headless/i.test(data.userAgent || "")) {
    return res.status(200).end();
  }

  const ip = req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress || "Noma'lum";

  let location = "🌍 <b>Localhost / Test rejimi</b>\n🏁 IP: localhost";
  if (!ip.includes("127.0.0.1") && !ip.includes("::1")) {
    try {
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
      if (geoRes.ok) {
        const geo = await geoRes.json();
        if (!geo.error) {
          location = `🌍 <b>${geo.country_name || "Noma'lum"}</b>
🏙 ${geo.city || "Noma'lum"}${geo.region ? `, ${geo.region}` : ""}
📡 ISP: ${geo.org || "Noma'lum"}
🏁 IP: ${ip}`;
        }
      }
    } catch {}
  }

  const ua = UAParser(data.userAgent || "");
  const e = (str) => (str ? String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;") : "Noma'lum");

  const message = `<b>👀 YANGI TASHRIFCHI!</b>

${location}

<b>📄 Sahifa:</b> ${e(data.page)}
<b>🔗 Kelgan joy:</b> ${e(data.referrer)}

<b>📱 Qurilma:</b>
• Model: ${e(ua.device.model || ua.device.type || "Universal")}
• Turi: ${e(data.deviceType)} • Sensorli: ${e(data.touchSupport)}
• CPU: ${e(data.cpuCores)} yadro • RAM: ${data.deviceMemory !== "Noma'lum" ? data.deviceMemory + " GB" : "Aniqlanmadi"}

<b>💻 Dasturiy ta'minot:</b>
• OS: ${e(ua.os.name)} ${e(ua.os.version)}
• Brauzer: ${e(ua.browser.name)} ${e(ua.browser.version)}
• Til: ${e(data.language)} ${data.languages !== "Noma'lum" ? `(${e(data.languages)})` : ""}

<b>🖥 Texnik:</b>
• Ekran: ${e(data.screen)} (${e(data.colorDepth)}-bit)
• Batareya: ${e(data.batteryLevel)} (${e(data.batteryCharging)})

<b>🌐 Internet:</b>
• Turi: ${e(data.connectionType)}
• Tezlik: ${e(data.effectiveType)} ${e(data.downlink)}

<b>🔐 Fingerprint (Unique ID):</b>
• Canvas: <code>${e(data.canvasFP)}</code>
• WebGL: <code>${e(data.webglFP)}</code>
• Audio: <code>${e(data.audioFP)}</code>

<b>🕐 Vaqt zonasi:</b> ${e(data.timezone)}
<b>⏰ Tashrif vaqti:</b> ${e(data.time)}

<b>🔒 Maxfiylik:</b>
• Onlayn: ${e(data.online)}
• Cookie: ${e(data.cookieEnabled)}
`;

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    if (!telegramRes.ok) console.error("Telegram xatosi:", await telegramRes.text());
  } catch (err) {
    console.error("Telegram ulanish xatosi:", err);
  }

  res.status(200).json({ ok: true });
}

export const config = {
  api: { bodyParser: true },
};