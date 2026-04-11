def build_prompt(email, labels):
    labels_text = "\n".join(
        [f"- {l.name}: {l.description}" for l in labels]
    )

    return f"""
You are an email classification system.

You MUST choose EXACTLY ONE label from the list below.

Available labels:
{labels_text}

STRICT RULES:
- Only return a label from the list
- Do NOT generalize
- Do NOT merge categories
- If it's a job alert → choose "Jobs", NOT "Work"
- If it's marketing → choose "Promotions"

Return ONLY JSON:
{{"label":"<label_name>","important":true/false}}

Email:
Subject: {email.subject}
From: {email.sender}
Body: {email.body}
"""

def build_batch_prompt(emails, labels):
    labels_text = "\n".join(
        [f"{l['name']}: {l['description']}" for l in labels]
    )

    emails_text = "\n".join([
        f"{e['id']}|{e['summary'][:120]}|{', '.join(e['tags'].split(',')[:4])}"
        for e in emails
    ])

    return f"""
Classify each email using ONE label.

Labels:
{labels_text}

Rules:
- Use label descriptions only
- One label per email
- No explanations

Return JSON array only:
[{{"id":"...","label":"...","important":false}}]

Emails:
{emails_text}
"""