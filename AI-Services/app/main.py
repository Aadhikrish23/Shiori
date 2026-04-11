from fastapi import FastAPI
from app.schemas.email import EmailInput
from app.services.classifier import classify_email, classify_emails_batch

app = FastAPI()

@app.get("/")
def root():
    return {"status": "AI Service Running"}

@app.post("/ai/email/classify")
def classify(data: EmailInput):
    return classify_email(data)

# 🔥 NEW BATCH ENDPOINT
@app.post("/ai/email/classify-batch")
def classify_batch(data: dict):
    return classify_emails_batch(data)