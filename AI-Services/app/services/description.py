import asyncio
from app.config.settings import settings
from app.prompts.label_description import build_label_prompt
from app.services.classifier import call_model
from app.utils.parser import extract_json
from app.providers.openai_provider import generate as openai_generate
from app.providers.ollama import generate as ollama_generate


async def call_model(prompt):
    if settings.AI_PROVIDER == "openai":
        return await openai_generate(prompt)
    else:
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(
            None,
            lambda: ollama_generate(prompt, settings.OLLAMA_MODEL_FAST)
        )
async def generate_label(data):
    prompt = build_label_prompt(data["name"], data["tags"])
    raw =await call_model(prompt)
    parsed = extract_json(raw)

    return parsed or {"description": ""}