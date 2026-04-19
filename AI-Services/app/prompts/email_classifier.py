def build_prompt(email, labels):
    labels_text = "\n".join(
        [
            f"- {l['name']}: {l.get('description', '')} | Tags: {', '.join(l['tags'])}"
            for l in labels
        ]
    )

    return f"""
You are a highly accurate email classification system.

You MUST assign EXACTLY ONE label from the list.

Each label includes:
- Description → meaning of the category
- Tags → keywords associated with it

------------------------
LABELS:
{labels_text}

------------------------
CLASSIFICATION RULES:

- Choose the label that BEST matches the email's intent
- Use DESCRIPTION as the PRIMARY signal
- Use TAGS as supporting hints only
- Do NOT rely only on keywords

- Do NOT force-fit emails into incorrect labels
- If uncertain, choose the closest logical match

------------------------
IMPORTANT RULES:

- Job label → ONLY actual hiring / recruiter / job alerts
- Promotions → ONLY marketing / sales / offers
- Alerts → security, banking, urgent system messages
- Updates → newsletters, informational emails
- Do NOT classify courses/webinars as jobs

------------------------
OUTPUT RULES:

- Return ONLY valid JSON
- No explanations
- Label must EXACTLY match one from list

Format:
{{"label":"<label_name>","important":true/false}}

------------------------
EMAIL:

Subject: {email.subject}
From: {email.sender}
Body: {email.body}
"""



def build_batch_prompt(emails, labels):
    labels_text = "\n".join(
        [
            f"- {l['name']}: {l.get('description', '')} | Tags: {', '.join(l['tags'])}"
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
You are an advanced email classification system.

Classify EACH email into:

1. label (user-defined)
2. type (system-defined)
3. action (system-defined)
4. confidence (0.5–1)
5. important (true/false)

------------------------
LABELS:
{labels_text}

------------------------
TYPE (choose ONE):
- primary
- update
- alert
- promotion

------------------------
ACTION (choose ONE):
- needs_action
- waiting
- info
- noise

------------------------
CLASSIFICATION RULES:

- Use DESCRIPTION as primary meaning
- Use TAGS only as hints
- Understand the INTENT of the email
- Do NOT rely on keyword matching alone

- Jobs = ONLY hiring-related emails
- Promotions = ONLY marketing/ads
- Alerts = security / banking / urgent
- Updates = newsletters / informational
- Courses/webinars ≠ jobs

------------------------
CONFIDENCE RULE:

- 0.9+ → very clear category
- 0.75–0.9 → strong match
- 0.6–0.75 → uncertain
- <0.6 → weak guess

------------------------
OUTPUT RULES:

- Use ONLY given labels
- EXACT match label name
- No explanations
- Strict JSON array

------------------------
RETURN FORMAT:
[
  {{
    "id": "...",
    "label": "...",
    "type": "...",
    "action": "...",
    "confidence": 0.85,
    "important": true/false
  }}
]

------------------------
EMAILS:
{emails_text}
"""