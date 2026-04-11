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
        [f"- {l['name']}: {l['description']}" for l in labels]
    )

    emails_text = "\n\n".join([
        f"""
ID: {e['id']}
Subject: {e['subject']}
From: {e['sender']}
Body: {e['body']}
"""
        for e in emails
    ])

    return f"""
    You are an email classification system.

    You must classify emails based ONLY on the provided labels and their descriptions.

    Available labels:
    {labels_text}

    STRICT RULES:

    - Each label has a meaning defined by its description
    - You MUST use the description to decide the correct label
    - Do NOT assume meaning from the label name alone
    - Match the email content to the closest description

    IMPORTANT:
    - Choose the label whose description best matches the email
    - If multiple match, choose the most specific one
    - If none clearly match, choose the closest one

    Return ONLY JSON:
    [
      {{"id":"123","label":"LabelName","important":false}}
    ]

    Emails:
    {emails_text}
    """