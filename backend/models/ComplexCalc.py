from pydantic import BaseModel

class Parameters(BaseModel):
    chart_name: str
    x_axis_name: str
    y_axis_name: str
    no_records: int
    noise_scale: float


class Results(BaseModel):
    chart_name: str
    x_axis_name: str
    y_axis_name: str
    values: list[float]