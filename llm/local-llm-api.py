from fastapi import FastAPI
from fastapi.responses import HTMLResponse, JSONResponse, Response
from pathlib import Path
import os
import platform
import psutil
import subprocess
import datetime
import requests
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

@app.get("/status")
def get_status():
    status = {
        "llm_server": "running",
        "qdrant": check_qdrant(),
        "git": get_git_commit(),
        "system": get_system_status(),
        "vercel": os.getenv("VERCEL_PROJECT_NAME", "not configured"),
        "render": os.getenv("RENDER_SERVICE_ID", "not configured")
    }
    return JSONResponse(status)

@app.get("/", response_class=HTMLResponse)
def root_dashboard():
    html_path = Path(__file__).parent / "dashboard.html"
    print(f">> [DEBUG] Attempting to read: {html_path.resolve()}")
    if not html_path.exists():
        return HTMLResponse("<h1>⚠️ dashboard.html not found</h1>", status_code=404)
    try:
        content = html_path.read_text(encoding="utf-8")
        return HTMLResponse(content=content, status_code=200)
    except Exception as e:
        return HTMLResponse(f"<h1>⚠️ Failed to load dashboard.html</h1><p>{e}</p>", status_code=500)

@app.get("/dashboard", response_class=HTMLResponse)
def read_dashboard():
    html_path = Path(__file__).parent / "dashboard.html"
    content = html_path.read_text(encoding="utf-8")
    return Response(content=content, media_type="text/html")

@app.get("/test")
def test_html():
    html = """
    <!DOCTYPE html>
    <html>
    <head><title>Test</title></head>
    <body><h1>✅ HTML Rendered Correctly</h1></body>
    </html>
    """
    return Response(content=html, media_type="text/html")

@app.get("/clean", response_class=HTMLResponse)
def serve_clean_html():
    html = """
    <!DOCTYPE html>
    <html>
    <head><title>Clean</title></head>
    <body style='font-family:sans-serif;'>
        <h1>✅ Clean HTML Dashboard</h1>
        <p>This confirms HTML is rendered properly.</p>
    </body>
    </html>
    """
    return HTMLResponse(content=html, media_type="text/html")

@app.get("/logs/vercel")
def vercel_logs():
    token = os.getenv("VERCEL_API_TOKEN")
    project = os.getenv("VERCEL_PROJECT_NAME")
    team = os.getenv("VERCEL_TEAM_NAME")  # optional

    headers = {"Authorization": f"Bearer {token}"}
    params = {"projectId": project}
    url = "https://api.vercel.com/v6/deployments"

    try:
        res = requests.get(url, headers=headers, params=params)
        res.raise_for_status()
        deployments = res.json().get("deployments", [])
        if not deployments:
            return {"status": "no deployments found"}
        latest = deployments[0]
        return {
            "status": latest.get("state"),
            "url": latest.get("url"),
            "created": latest.get("createdAt")
        }
    except Exception as e:
        return {"error": str(e)}

def check_qdrant():
    try:
        url = os.getenv("QDRANT_URL", "http://localhost:6333") + "/collections"
        response = requests.get(url, timeout=2)
        if response.status_code == 200:
            return "connected"
        return f"status {response.status_code}"
    except Exception as e:
        return f"error: {str(e)}"

def get_git_commit():
    try:
        commit = subprocess.check_output(["git", "rev-parse", "--short", "HEAD"], stderr=subprocess.DEVNULL).decode().strip()
        date = subprocess.check_output(["git", "log", "-1", "--format=%cd"], stderr=subprocess.DEVNULL).decode().strip()
        return {"commit": commit, "date": date}
    except:
        return "not available"

def get_system_status():
    return {
        "platform": platform.system(),
        "cpu_percent": psutil.cpu_percent(interval=1),
        "memory_percent": psutil.virtual_memory().percent,
        "uptime": str(datetime.datetime.now() - datetime.datetime.fromtimestamp(psutil.boot_time())).split('.')[0]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("local-llm-api:app", host="127.0.0.1", port=8000, reload=False)
