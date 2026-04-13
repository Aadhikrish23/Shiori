export interface EmailInput {
  email: {
    subject: string;
    sender: string;
    body: string;
  };
  labels: {
    name: string;
    description: string;
  }[];
}

export interface EmailOutput {
  label: string;
  important: boolean;
}

// 🔥 NEW (batch)
export interface BatchEmailInput {
  emails: {
    id: string;
    subject: string;
    sender: string;
    body: string;
  }[];
  labels: {
    name: string;
    tags: string[];
  }[];
}

export interface BatchEmailOutput {
  id: string;
  label: string;
  important: boolean;
}
export interface Email {
  id: string;
  subject: string;
  sender: string;
  snippet: string;
}