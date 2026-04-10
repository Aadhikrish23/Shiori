from pydantic import BaseModel

class EmailInput(BaseModel):
    subject: str
    sender: str
    body: str

class EmailOutput(BaseModel):
    category: str
    important: bool