import json
import re

def extract_json(text):
    try:
        return json.loads(text)
    except:
        # Extract first JSON object
        match = re.search(r'\{.*?\}', text, re.DOTALL)
        if match:
            try:
                return json.loads(match.group())
            except:
                pass

    return None