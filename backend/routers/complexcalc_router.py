from fastapi import APIRouter
from models.ComplexCalc import Parameters, Results
from matlab_utils.matlab_runner import run_complex_calc

router = APIRouter()

@router.post("/complexcalc/calculate", response_model=Results)
async def calculate_complex(data: Parameters):
    values = run_complex_calc(data.no_records, data.noise_scale)
    return Results(values=values, chart_name=data.chart_name, x_axis_name=data.x_axis_name, y_axis_name=data.y_axis_name)
