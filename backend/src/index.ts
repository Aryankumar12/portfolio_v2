import express from "express"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(({path: ".env"}))
const PORT = process.env.PORT || 5000;

import router from "./routes/contact";

const app = express();
app.use(express.json());


app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", 
    methods : ["GET", 'POST']
}))
app.listen(PORT, ()=>{
    console.log(`app is running on the port ${PORT}`)
})

app.use("/api/contact",router);

app.get("/health", (req, res)=>{
    res.status(200).json({status: "server is running fine"});
})
