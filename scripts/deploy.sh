#!/bin/bash

# Go to LLM directory
cd "$(dirname "$0")/../llm"

# Create virtual environment if missing
if [ ! -d "venv" ]; then
  echo "> Creating virtual environment..."
  python3 -m venv venv
fi

# Activate virtual environment
echo "> Activating virtual environment..."
source venv/bin/activate

# Install dependencies
pip install --upgrade pip >/dev/null
pip install -r requirements.txt >/dev/null

# Start Qdrant if not running
if ! nc -z localhost 6333; then
  echo "> Starting Qdrant in Docker..."
  docker run -d -p 6333:6333 -v qdrant_data:/qdrant/storage qdrant/qdrant > /dev/null
else
  echo "> Qdrant already running."
fi

# Ensure logs folder
mkdir -p logs

# Init Qdrant collection
echo "> Ensuring Qdrant collection..."
python3 init_qdrant.py

# Start FastAPI server
echo "> Starting FastAPI server..."
nohup python3 local-llm-api.py > logs/server.log 2>&1 &

# Launch watcher
echo "> Starting watcher..."
nohup python3 watch_and_ingest.py > logs/watcher.log 2>&1 &

# Open dashboard
sleep 2
open http://localhost:8000

echo "✅ After AI stack started."
echo "Check: http://localhost:8000"
