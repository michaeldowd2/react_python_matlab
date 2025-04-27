from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.simplecalc_router import router as simplecalc_router
from routers.complexcalc_router import router as complexcalc_router

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

app.include_router(simplecalc_router)
app.include_router(complexcalc_router)