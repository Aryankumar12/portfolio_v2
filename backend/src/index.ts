import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import cors from "cors";
import router from "./routes/contact";

const PORT = process.env.PORT || 5000;
const app = express();

// ✅ Allow all origins that match — no trailing slash issues
app.use(cors({
  origin: (origin, callback) => {
    const allowed = [
      "https://portfolio-v2-delta-gilt-80.vercel.app",
      "http://localhost:5173"
    ];
    // allow requests with no origin (Postman, health checks)
    if (!origin || allowed.includes(origin.replace(/\/$/, ""))) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }
  },
  methods: ["GET", "POST"],
}));

app.use(express.json());
app.use("/api/contact", router);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "server is running fine" });
});

app.listen(PORT, () => {
  console.log(`app is running on the port ${PORT}`);
});