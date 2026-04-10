import { EmailInput, EmailOutput } from "../types/email";
import AICall from "../config/axios";
export async function classifyEmail(email: EmailInput): Promise<EmailOutput> {

    
  
    const res = await AICall.post("/ai/email/classify",email);

  return res.data;
}