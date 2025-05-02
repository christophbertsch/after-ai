#!/bin/bash

cd "$(dirname "$0")/.."

echo "🔄 Auto-committing and pushing changes..."

git add .

timestamp=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "Auto commit: $timestamp" 2>/dev/null

# Check if commit was made (avoid pushing if nothing to commit)
if [ $? -eq 0 ]; then
  git push origin main
  echo "✅ Push complete."
else
  echo "⚠️  Nothing new to commit."
fi