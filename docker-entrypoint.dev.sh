#!/bin/sh
set -e
cd /app

if [ ! -d node_modules/next ]; then
  echo "[barakags] Installing dependencies (node_modules volume empty)..."
  npm ci
fi

exec "$@"
