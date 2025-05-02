from fastapi import FastAPI
from fastapi.responses import Response
import uvicorn

app = FastAPI()

@app.get("/")
def read_root():
    html = """
    <!DOCTYPE html>
    <html>
    <head><title>Test</title></head>
    <body><h1>✅ Rendered HTML</h1></body>
    </html>
    """
    return Response(content=html, media_type="text/html")

if __name__ == "__main__":
    uvicorn.run("test_app:app", host="127.0.0.1", port=8010, reload=False)
