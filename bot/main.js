const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const botToken = "6883604435:AAE_kGvx9yNIQbKyJDyVUAE3CT-l-AMW3ec";
const tgBot = new TelegramBot(botToken, {polling: true});

tgBot.web

tgBot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if(text === '/start') {
        await tgBot.sendMessage(chatId, "нажмите на кнопку, чтобы открыть статистику", {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "Открыть",
                            web_app: {
                                url: "https://ya.ru/",
                            }
                        }
                    ]
                ],
                resize_keyboard: true,
                is_persistent: true
            }
        });
        await tgBot.web
    }
});

const app = express();
app.use(express.json());

const PORT = 8000;
app.listen(PORT, () => console.log('server started on PORT ' + PORT))