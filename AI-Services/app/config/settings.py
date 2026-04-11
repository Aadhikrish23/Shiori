import os
from dotenv import load_dotenv
from pathlib import Path

# 🔥 Force correct .env path
BASE_DIR = Path(__file__).resolve().parent.parent.parent
ENV_PATH = BASE_DIR / ".env"

load_dotenv(dotenv_path="E:/Shiori/AI-Services/.env")
class Settings:
    AI_PROVIDER: str = os.getenv("AI_PROVIDER", "ollama")

    # OpenAI
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY")
    OPENAI_MODEL: str = os.getenv("OPENAI_MODEL", "gpt-5-mini")

    # Ollama
    OLLAMA_URL: str = os.getenv("OLLAMA_URL")
    OLLAMA_MODEL_FAST: str = os.getenv("OLLAMA_MODEL_FAST")

settings = Settings()



