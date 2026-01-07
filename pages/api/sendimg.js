// pages/api/sendimg.js
import formidable from "formidable";
import fs from "fs";

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
    return res.status(500).json({ error: "Token yoki chat ID yo'q" });
  }

  const form = formidable({});

  try {
    const [fields, files] = await form.parse(req);

    const photoFile = files.photo?.[0];

    if (!photoFile) {
      return res.status(400).json({ error: "Rasm topilmadi" });
    }

    // Faylni buffer ga o'qiymiz
    const buffer = fs.readFileSync(photoFile.filepath);

    // Blob yaratamiz
    const blob = new Blob([buffer], { type: "image/jpeg" });

    const formData = new FormData();
    formData.append("chat_id", CHAT_ID);
    formData.append("photo", blob, "selfie.jpg");
    formData.append("caption", `Saytdan yangi selfie! 📸\nVaqt: ${new Date().toLocaleString("uz-UZ")}`);

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.ok) {
      return res.status(200).json({ success: true });
    } else {
      console.error("Telegram xatosi:", result);
      return res.status(500).json({ error: result.description || "Yuborishda xatolik" });
    }

  } catch (error) {
    console.error("Server xatosi:", error);
    return res.status(500).json({ error: "Server xatosi" });
  }
}