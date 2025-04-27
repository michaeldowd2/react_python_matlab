from fastapi import APIRouter
from models.SimpleCalc import Parameters, Results
from matlab_utils.matlab_runner import run_simple_calc

router = APIRouter()

@router.post("/simplecalc/calculate", response_model=Results)
async def calculate_simple(data: Parameters):
    result = run_simple_calc(data.calc_type, data.x, data.y)
    return Results(result=result)
