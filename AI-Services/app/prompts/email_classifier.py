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

    emails_text = "\n\n".join([
        f"""
ID: {e['id']}
Subject: {e['subject']}
From: {e['sender']}
Body: {e['body'][:300]}
"""
        for e in emails
    ])

    return f"""
You are an email classification system.

Classify each email into EXACTLY ONE label.

Labels:
{labels_text}

Rules:
- Only use given labels
- No explanations
- Be accurate
- Return STRICT JSON

Return format:
[{{"id":"...","label":"...","important":true/false}}]

Emails:
{emails_text}
"""