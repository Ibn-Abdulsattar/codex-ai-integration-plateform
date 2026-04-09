import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import client from "./config/openai.js";

const app = express();
app.set("PORT", process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  }),
);

app.get("/api", async (req, res, next) => {
  try {
    const aiResponse = await client.chat.completions.create({
      messages: [{ role: "user", content: " " }],
      model: "llama-3.3-70b-versatile", 
    });

    return res.status(200).json({
      message: aiResponse.choices[0].message.content, 
    });
  } catch (error) {
    next(error); 
  }
});


app.use((err, req, res, next) => {
  console.error("🔥 Error:", err);
  const statusCode = err.statusCode || 500;
  const message = err.message || Error.message || "Internal Server Error";
  return res.status(statusCode).json({ message });
});

export { app };
