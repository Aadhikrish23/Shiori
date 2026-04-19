from fastapi import FastAPI
from app.schemas.email import EmailInput
from app.services.classifier import classify_email, classify_emails_batch
from app.schemas.BatchRequest import BatchRequest
from app.services.description import generate_label

app = FastAPI()

@app.get("/")
def root():
    return {"status": "AI Service Running"}

@app.post("/ai/email/classify")
async def classify(data: EmailInput):
    return await classify_email(data)

# 🔥 NEW BATCH ENDPOINT
@app.post("/ai/email/classify-batch")
async def classify_batch(data: BatchRequest):
    return await classify_emails_batch(data)
@app.post("/ai/label/describe")
async def describe_label(data: dict):
    return await generate_label(data)