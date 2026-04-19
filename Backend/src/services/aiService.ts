import { BatchEmailInput, BatchEmailOutput, EmailInput, EmailOutput } from "../types/email";
import AICall from "../config/axios";

export async function classifyEmail(
  data: EmailInput
): Promise<EmailOutput> {
  const res = await AICall.post("/ai/email/classify", data);
  return res.data;
}
export async function classifyEmailsBatch(
  data: BatchEmailInput
): Promise<BatchEmailOutput[]> {
  const res = await AICall.post("/ai/email/classify-batch", data);
  return res.data;
}
export async function generateLabelDescription(data: {
  name: string;
  tags: string[];
}): Promise<string> {
  const res = await AICall.post("/ai/label/describe", data);
  return res.data.description;
}