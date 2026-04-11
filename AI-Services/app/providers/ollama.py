import requests
from app.config.settings import settings

OLLAMA_URL = settings.OLLAMA_URL

def generate(prompt, model):
    response = requests.post(
        OLLAMA_URL,
        json={
            "model": model,
            "prompt": prompt.strip(),
            "stream": False,
            "options": {
                "temperature": 0.2,
                "num_predict": 100
            }
        },
        timeout=30
    )

    data = response.json()

    print("FULL OLLAMA RESPONSE:\n", data)

    return data.get("response", "")