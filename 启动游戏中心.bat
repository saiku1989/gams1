@echo off
chcp 65001 >nul
title ChillWork 游戏中心服务器

echo ================================
echo    🎮 ChillWork 游戏中心 🎮
echo ================================
echo.
echo 正在启动本地服务器...
echo.

cd /d "%~dp0"

python start_server.py

if errorlevel 1 (
    echo.
    echo ❌ Python服务器启动失败！
    echo 💡 请确保已安装Python 3.x
    echo.
    echo 📌 备用方案：
    echo    1. 安装 Live Server（VS Code扩展）
    echo    2. 使用其他HTTP服务器软件
    echo    3. 直接双击 index.html（功能可能受限）
    echo.
    pause
)

echo.
echo 服务器已关闭
pause 