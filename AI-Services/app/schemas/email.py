from pydantic import BaseModel
from typing import List

class Label(BaseModel):
    name: str
    description: str

class EmailData(BaseModel):
    subject: str
    sender: str
    body: str

class EmailInput(BaseModel):
    email: EmailData
    labels: List[Label]

class EmailOutput(BaseModel):
    label: str
    important: bool