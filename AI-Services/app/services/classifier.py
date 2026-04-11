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
def call_model(prompt):
    if settings.AI_PROVIDER == "openai":
        return openai_generate(prompt)
    else:
        return ollama_generate(prompt, settings.OLLAMA_MODEL_FAST)


# =========================
# SINGLE
# =========================
def classify_email(data):
    prompt = build_prompt(data.email, data.labels)

    raw = call_model(prompt)

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

    compressed_emails = []

    tasks = [summarize_email_async(email) for email in emails]
    summaries = await asyncio.gather(*tasks)

    compressed_emails = []

    for email, summary_data in zip(emails, summaries):
        compressed_emails.append({
            "id": email.get("id"),
            "summary": summary_data.get("summary", ""),
            "tags": summary_data.get("tags", "")
        })

    print("COMPRESSED EMAILS:", compressed_emails)

    prompt = build_batch_prompt(compressed_emails, labels)

    raw = call_model(prompt)

    print("RAW MODEL OUTPUT:\n", raw)

    parsed = extract_json(raw)

    if not parsed:
        return []

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