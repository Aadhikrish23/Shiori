from fastapi import FastAPI
from app.schemas.email import EmailInput
from app.services.classifier import classify_email, classify_emails_batch
from app.schemas.BatchRequest import BatchRequest

app = FastAPI()

@app.get("/")
def root():
    return {"status": "AI Service Running"}

@app.post("/ai/email/classify")
def classify(data: EmailInput):
    return classify_email(data)

# 🔥 NEW BATCH ENDPOINT
@app.post("/ai/email/classify-batch")
async def classify_batch(data: BatchRequest):
    return await classify_emails_batch(data)