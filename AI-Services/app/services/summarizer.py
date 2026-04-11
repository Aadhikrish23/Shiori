import asyncio
from app.prompts.email_summarizer import summarize_email as build_summarizer_prompt
from app.config.settings import settings
from app.providers.ollama import generate as ollama_generate


async def summarize_email_async(email):
    prompt = build_summarizer_prompt(email)

    try:
        loop = asyncio.get_event_loop()

        raw = await loop.run_in_executor(
            None,
            lambda: ollama_generate(prompt, settings.OLLAMA_MODEL_FAST)
        )

        text = (raw or "").strip()

        summary = ""
        tags = ""

        lower_text = text.lower()

        summary_idx = lower_text.find("summary:")
        tags_idx = lower_text.find("tags:")

        if summary_idx != -1 and tags_idx != -1:
            if summary_idx < tags_idx:
                summary = text[summary_idx + 8:tags_idx].strip()
                tags = text[tags_idx + 5:].strip()
            else:
                tags = text[tags_idx + 5:summary_idx].strip()
                summary = text[summary_idx + 8:].strip()

        elif summary_idx != -1:
            summary = text[summary_idx + 8:].strip()

        elif tags_idx != -1:
            tags = text[tags_idx + 5:].strip()

        else:
            summary = text[:200]

        tags = tags.replace("\n", " ").strip()
        tags = ", ".join([t.strip() for t in tags.split(",") if t.strip()][:4])

        summary = summary.replace("\n", " ").strip()

        return {
            "summary": summary,
            "tags": tags
        }

    except Exception as e:
        print("Summarizer error:", e)

        return {
            "summary": email.get("subject", "")[:100],
            "tags": ""
        }