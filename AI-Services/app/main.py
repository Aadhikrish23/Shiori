from fastapi import FastAPI
from app.schemas.email import EmailInput
from app.tasks.email_classifier import classify_email

app = FastAPI()

@app.get("/")
def root():
    return {"status": "AI Service Running"}

@app.post("/ai/email/classify")
def classify(email: EmailInput):
    result = classify_email(email)
    return result