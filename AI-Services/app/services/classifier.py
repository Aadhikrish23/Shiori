import asyncio
from app.utils.parser import extract_json
from app.prompts.email_classifier import build_prompt, build_batch_prompt
from app.config.settings import settings

# providers
from app.providers.ollama import generate as ollama_generate
from app.providers.openai_provider import generate as openai_generate
from app.services.summarizer import summarize_email_async


# =========================
# 🔁 PROVIDER SWITCH
# =========================
async def call_model(prompt):
    if settings.AI_PROVIDER == "openai":
        return await openai_generate(prompt)
    else:
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(
            None,
            lambda: ollama_generate(prompt, settings.OLLAMA_MODEL_FAST)
        )

# =========================
# SINGLE
# =========================
async def classify_email(data):
    prompt = build_prompt(data.email, data.labels)

    raw = await call_model(prompt)

    parsed = extract_json(raw)

    if not parsed:
        return {
            "label": "Unknown",
            "important": False
        }

    return parsed


# =========================
# 🔥 BATCH
# =========================
async def classify_emails_batch(data):
    emails = data.emails
    labels = data.labels

    compressed_emails = [
        {
            "id": email.get("id"),
            "subject": email.get("subject"),
            "sender": email.get("sender"),
            "body": email.get("body")[:500]  # 🔥 limit size
        }
        for email in emails
    ]

    print("COMPRESSED EMAILS:", compressed_emails)

    prompt = build_batch_prompt(compressed_emails, labels)

    raw = await call_model(prompt)

    print("RAW MODEL OUTPUT:\n", raw)

    parsed = extract_json(raw)

    if not parsed or not isinstance(parsed, list):
        return []


    for item in parsed:
        item["type"] = item.get("type", "primary")
        item["action"] = item.get("action", "info")
        item["confidence"] = float(item.get("confidence", 0.7))

    return parsed

# def classify_emails_batch(data):
#     emails = data["emails"]
#
#     results = []
#
#     for email in emails:
#         summary_data = summarize_email_service(email)
#
#         print("SUMMARY RESULT:", summary_data)
#
#         results.append({
#             "id": email.get("id"),
#             "summary": summary_data.get("summary", ""),
#             "tags": summary_data.get("tags", "")
#         })
#
#     return results