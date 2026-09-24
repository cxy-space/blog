@echo off
setlocal
set "MESSAGE=%~1"
if "%MESSAGE%"=="" set "MESSAGE=更新博客"
npm.cmd run publish -- "%MESSAGE%"
set "EXITCODE=%ERRORLEVEL%"
endlocal & exit /b %EXITCODE%
