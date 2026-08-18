import app from "./app.js";
import dotenv from "dotenv";
import connectDb from "./db/db.js";

dotenv.config();

connectDb()
    .then(() => {
        app.listen(9000, () => {
            console.log("server is running...");
        });
    })
    .catch((err) => {
        console.log("Failed to start the server", error);
    });
