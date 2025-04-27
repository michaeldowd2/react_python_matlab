from pydantic import BaseModel

class Parameters(BaseModel):
    calc_type: str
    x: float
    y: float

class Results(BaseModel):
    result: float