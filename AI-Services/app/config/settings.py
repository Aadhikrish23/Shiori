import os
from dotenv import load_dotenv
from pathlib import Path

# 🔥 Force correct .env path
BASE_DIR = Path(__file__).resolve().parent.parent.parent
ENV_PATH = BASE_DIR / ".env"

load_dotenv(dotenv_path="E:/Shiori/AI-Services/.env")
class Settings:
    OLLAMA_URL: str = os.getenv("OLLAMA_URL")
    OLLAMA_MODEL_FAST: str = os.getenv("OLLAMA_MODEL_FAST")

settings = Settings()

# ✅ Debug
print("ENV PATH:", ENV_PATH)
print("OLLAMA_URL:", settings.OLLAMA_URL)