from pydantic import BaseModel
from typing import List, Dict, Any


class BatchRequest(BaseModel):
    emails: List[Dict[str, Any]]
    labels: List[Dict[str, Any]]