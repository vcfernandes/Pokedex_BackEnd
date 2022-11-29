import * as dotenv from "dotenv";
import mongoose from "mongoose"

dotenv.config();
export function connectToDatabase() {
        mongoose.connect(process.env.DATABASE_URL);

    const db = mongoose.connection;
    db.on("error", (error) => console.error('Error DB', error));
    db.once("open", () => {
        console.log("Connected to the database!")
})
}