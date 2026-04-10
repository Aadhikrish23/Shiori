import requests
from app.config.settings import settings
print("OLLAMA_URL:", settings.OLLAMA_URL)
def generate(prompt, model):
    response = requests.post(settings.OLLAMA_URL, json={
        "model": model,
        "prompt": prompt,
        "stream": False
    })

    data = response.json()

    # 🔥 DEBUG
    print("FULL OLLAMA RESPONSE:\n", data)

    return data.get("response", "")