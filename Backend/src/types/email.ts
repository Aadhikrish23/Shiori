export interface EmailInput {
  subject: string;
  sender: string;
  body: string;
}

export interface EmailOutput {
  category: string;
  important: boolean;
}