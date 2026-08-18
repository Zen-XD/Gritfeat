import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logRequest = async (req, res, next) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${req.method} ${req.url}\n`;

    console.log(logMessage.trim());

    try {
        const logFilePath = path.join(__dirname, "..", "requests.log");
        await fs.appendFile(logFilePath, logMessage);
    } catch (err) {
        console.error("Failed to write log to file:", err);
    }

    next();
};

export default logRequest;
