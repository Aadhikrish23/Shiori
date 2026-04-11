def summarize_email(email):
    return f"""Summarize this email in one short line and extract tags.

    STRICT FORMAT:
    Summary: <one line>
    Tags: <comma separated>

    Do NOT put Tags inside Summary.

    Email:
    Subject: {email.get('subject', '')}
    From: {email.get('sender', '')}
    Body: {email.get('body', '')[:500]}
    """