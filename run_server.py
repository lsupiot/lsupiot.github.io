#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

PORT = 8000
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

try:
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"✓ Server started on http://localhost:{PORT}")
        print(f"✓ Serving from: {os.getcwd()}")
        print("✓ Press Ctrl+C to stop")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\n✓ Server stopped")
    sys.exit(0)
