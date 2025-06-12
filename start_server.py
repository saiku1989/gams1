#!/usr/bin/env python3
"""
ChillWork 游戏中心本地服务器启动脚本
用于本地开发和测试
"""

import http.server
import socketserver
import webbrowser
import os
import sys

# 配置
PORT = 8000
HOST = 'localhost'

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # 添加CORS头部以支持iframe内容
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def start_server():
    """启动本地HTTP服务器"""
    try:
        # 切换到正确的目录
        script_dir = os.path.dirname(os.path.abspath(__file__))
        os.chdir(script_dir)
        
        # 创建服务器
        with socketserver.TCPServer((HOST, PORT), MyHTTPRequestHandler) as httpd:
            print(f"🎮 ChillWork 游戏中心服务器启动成功!")
            print(f"📍 服务器地址: http://{HOST}:{PORT}")
            print(f"📁 服务目录: {script_dir}")
            print(f"🌐 正在自动打开浏览器...")
            print(f"⏹️  按 Ctrl+C 停止服务器")
            print("-" * 50)
            
            # 自动打开浏览器
            webbrowser.open(f'http://{HOST}:{PORT}')
            
            # 启动服务器
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 服务器已停止")
        sys.exit(0)
    except OSError as e:
        if e.errno == 10048:  # Windows端口被占用错误
            print(f"❌ 端口 {PORT} 已被占用，请尝试其他端口")
            print(f"💡 您可以修改脚本中的 PORT 变量")
        else:
            print(f"❌ 服务器启动失败: {e}")
        sys.exit(1)

if __name__ == "__main__":
    start_server() 