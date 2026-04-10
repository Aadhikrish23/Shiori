from app.providers.ollama import generate
from app.config.settings import settings
from app.utils.parser import extract_json

PROMPT = """
You are an email classifier.

Classify the email into one of:
Work, Finance, Social, Promotions, Spam

Also determine:
important: true or false

STRICT:
- Return ONLY valid JSON
- DO NOT include explanation
- DO NOT include markdown
- DO NOT include thinking
- DO NOT include backticks

Output format:
{{"category":"Work","important":true}}

Email:
Subject: {subject}
From: {sender}
Body: {body}
"""

def classify_email(data):
    prompt = PROMPT.format(
        subject=data.subject,
        sender=data.sender,
        body=data.body
    )

    raw = generate(prompt, settings.OLLAMA_MODEL_FAST)
    print("RAW MODEL OUTPUT:\n", raw)
    parsed = extract_json(raw)

    if not parsed:
        return {
            "category": "Unknown",
            "important": False
        }

    return parsed