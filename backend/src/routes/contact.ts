import express , {Request, Response} from "express";


import { sendEmail } from "../services/emailService";


const router =  express.Router();


router.post("/", async(req: Request, res: Response)=>{
    const {name, email,  message}= req.body
    if(!email || !name ) {
        res.status(400).json({success: false, message: "All field are required"});
        return }

    try{
        await sendEmail({name, email, message});
        res.status(200).json({success: true, message:"Email sent successfully"})



    }
    catch(err){
        console.error("Email error:", err); 
        res.status(500).json({success:false, message: "Failed to sent email"});
    }
})

export default router