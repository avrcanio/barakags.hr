#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

COMPOSE="docker compose -f docker-compose.dev.yml"

echo "==> barakags.hr — development mode"
echo "    compose: docker-compose.dev.yml"
echo "    server:  next dev (hot reload)"
echo

$COMPOSE build
$COMPOSE up -d

echo
echo "==> Status"
$COMPOSE ps

echo
echo "==> Recent logs"
$COMPOSE logs --tail 15 web

echo
echo "Done. Site: https://barakags.hr/hr"
echo "Logs:  $COMPOSE logs -f web"
