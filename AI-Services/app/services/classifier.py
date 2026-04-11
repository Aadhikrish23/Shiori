from app.utils.parser import extract_json
from app.prompts.email_prompt import build_prompt, build_batch_prompt
from app.config.settings import settings

# providers
from app.providers.ollama import generate as ollama_generate
from app.providers.openai_provider import generate as openai_generate


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
def classify_emails_batch(data):
    emails = data["emails"]
    labels = data["labels"]

    prompt = build_batch_prompt(emails, labels)

    raw = call_model(prompt)

    print("RAW MODEL OUTPUT:\n", raw)

    parsed = extract_json(raw)

    if not parsed:
        return []

    return parsed