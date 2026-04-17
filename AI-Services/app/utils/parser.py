import json
import re

def extract_json(text):
    if not text:
        return None

    # 🔥 STEP 1: Try full JSON (array or object)
    try:
        return json.loads(text)
    except:
        pass

    # 🔥 STEP 2: Try to extract JSON array
    array_match = re.search(r'\[.*\]', text, re.DOTALL)
    if array_match:
        try:
            return json.loads(array_match.group())
        except:
            pass

    # 🔥 STEP 3: Try to extract single object
    obj_match = re.search(r'\{.*\}', text, re.DOTALL)
    if obj_match:
        try:
            return [json.loads(obj_match.group())]  # wrap in list
        except:
            pass

    return None