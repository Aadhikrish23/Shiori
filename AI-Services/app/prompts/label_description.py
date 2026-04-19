def build_label_prompt(name, tags):
    return f"""
Generate a SHORT description for this email category.

Label: {name}
Tags: {', '.join(tags)}

STRICT RULES:
- MAX 12 words
- ONE sentence only
- Be concise and specific
- Do NOT explain, summarize only
- No filler words
- No explanations

GOOD EXAMPLE:
"Job-related emails like hiring alerts and interview invites"

BAD EXAMPLE:
"Emails in this category contain detailed information about..."

Return JSON:
{{"description": "..."}}
"""