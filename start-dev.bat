@echo off
echo Starting shiori Services...

echo.
echo Starting Backend...
start cmd /k "cd backend && npm run dev"

echo.
echo Starting Frontend...
start cmd /k "cd shiori-frontend && npm run dev"

echo.
echo Starting AI Service...
start cmd /k "cd AI-Services && venv\Scripts\activate && uvicorn app.main:app --reload"

echo.
echo All services started!
pause