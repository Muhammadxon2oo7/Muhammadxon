export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Faqat POST so'rovlari qabul qilinadi" });
    }
  
    const { name, telegramUsername, subject, message } = req.body;
  
    // Environment variable'larni tekshirish
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    console.log("Bot Token:", botToken); // Debugging uchun
    console.log("Chat ID:", chatId); // Debugging uchun
  
    if (!botToken || !chatId) {
      return res.status(500).json({ error: "Server konfiguratsiyasida xatolik: Environment variable'lar topilmadi" });
    }
  
    const telegramMessage = `
      🌟 Yangi xabar: 🌟
      👤 Ism: ${name}
      📱 Telegram Username: ${telegramUsername}
      📌 Mavzu: ${subject}
      💬 Xabar: ${message}
    `.trim();
  
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      });
  
      const responseData = await response.json();
      if (!response.ok) {
        console.error("Telegram API xatosi:", responseData);
        throw new Error(`Xabar yuborishda xatolik yuz berdi: ${responseData.description}`);
      }
  
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Xatolik:", error);
      return res.status(500).json({ error: `Xabar yuborishda xatolik yuz berdi: ${error.message}` });
    }
  }