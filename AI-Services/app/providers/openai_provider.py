from openai import OpenAI
from app.config.settings import settings

client = OpenAI(api_key=settings.OPENAI_API_KEY)

def generate(prompt):
    response = client.responses.create(
        model=settings.OPENAI_MODEL,
        input=[
            {"role": "system", "content": "You are a strict email classifier. Return only JSON."},
            {"role": "user", "content": prompt}
        ]
    )

    return response.output_text