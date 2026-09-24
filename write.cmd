@echo off
setlocal
if "%~1"=="" (
  echo Usage: write.cmd "post title"
  exit /b 1
)
npm.cmd run new -- "%~1"
endlocal
