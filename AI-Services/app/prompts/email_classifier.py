def build_prompt(email, labels):
    labels_text = "\n".join(
        [
            f"- {l.name}: {', '.join(l.tags)}"
            for l in labels
        ]
    )

    return f"""
You are an email classification system.

You MUST choose EXACTLY ONE label from the list below.

Each label contains tags that describe the category.

Available labels:
{labels_text}

STRICT RULES:
- Only return a label from the list
- Do NOT generalize
- Do NOT merge categories
- Match based on tags relevance
- If it's a job alert → choose "jobs"
- If it's marketing → choose "promotions"
-- Always return label names exactly as given (case-sensitive, usually lowercase)

Return ONLY JSON:
{{"label":"<label_name>","important":true/false}}

Email:
Subject: {email.subject}
From: {email.sender}
Body: {email.body}
"""


def build_batch_prompt(emails, labels):
    labels_text = "\n".join(
        [
            f"{l['name']}: {', '.join(l['tags'])}"
            for l in labels
        ]
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

Each label has a list of tags describing it.

Your job is to match email content with the most relevant label using those tags.

Labels:
{labels_text}

Rules:
- Only use the provided labels
- Choose EXACTLY ONE label per email
- Match based on semantic similarity with tags
- Do NOT invent labels
- No explanations
- Be consistent and strict
- - Always return label names exactly as given (case-sensitive, usually lowercase)

Return STRICT JSON:
[{{"id":"...","label":"...","important":true/false}}]

Emails:
{emails_text}
"""