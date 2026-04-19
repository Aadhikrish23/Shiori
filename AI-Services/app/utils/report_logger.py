# app/utils/report_logger.py

import os
from datetime import datetime

REPORT_DIR = "reports"

if not os.path.exists(REPORT_DIR):
    os.makedirs(REPORT_DIR)

def create_report_file(prefix="ai-report"):
    timestamp = datetime.now().isoformat().replace(":", "-")
    filename = f"{prefix}-{timestamp}.txt"
    path = os.path.join(REPORT_DIR, filename)

    with open(path, "w") as f:
        f.write("")

    return path

def append_report(path, text):
    with open(path, "a", encoding="utf-8") as f:
        f.write(text + "\n")