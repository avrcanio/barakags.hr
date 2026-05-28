#!/usr/bin/env bash
# Dnevni Cloudflare analytics mail — pokreće cron u 07:00 (Europe/Zagreb).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

export PATH="/usr/local/bin:/usr/bin:/bin"
export NODE_ENV=production

exec npm run analytics:report
