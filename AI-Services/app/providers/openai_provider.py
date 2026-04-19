from openai import AsyncOpenAI
from app.config.settings import settings
import time
from app.utils.report_logger import create_report_file, append_report

client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
REPORT_FILE = create_report_file("ai-usage")

async def generate(prompt: str):
    start = time.time()

    response = await client.chat.completions.create(
        model=settings.OPENAI_MODEL,
        messages=[
            {
                "role": "system",
                "content": "You are a strict email classifier. Return only JSON."
            },
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    latency = int((time.time() - start) * 1000)
    usage = response.usage

    append_report(REPORT_FILE, "====================")
    append_report(REPORT_FILE, f"Latency: {latency}ms")
    append_report(REPORT_FILE, f"Input Tokens: {usage.prompt_tokens}")
    append_report(REPORT_FILE, f"Output Tokens: {usage.completion_tokens}")
    append_report(REPORT_FILE, f"Total Tokens: {usage.total_tokens}")
    append_report(REPORT_FILE, f"Prompt Length: {len(prompt)}")

    return response.choices[0].message.content