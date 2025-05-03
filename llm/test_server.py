from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
def hello():
    return HTMLResponse("<h1>✅ Hello from test_server.py</h1>", status_code=200)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("test_server:app", host="127.0.0.1", port=8000, reload=False)
