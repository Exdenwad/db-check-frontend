import TelegramBot from "node-telegram-bot-api";

const botToken = "6883604435:AAE_kGvx9yNIQbKyJDyVUAE3CT-l-AMW3ec";
const tgBot = new TelegramBot(botToken, {polling: true});

export default tgBot;