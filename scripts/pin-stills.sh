#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/media"
mkdir -p "$DEST"

pin() {
  local name="$1"
  local url="$2"
  local bytes="$3"
  local sha="$4"
  local out="$DEST/$name"

  if [[ -f "$out" ]]; then
    local got_bytes got_sha
    got_bytes="$(wc -c < "$out" | tr -d ' ')"
    got_sha="$(sha1sum "$out" | awk '{print $1}')"
    if [[ "$got_bytes" == "$bytes" && "$got_sha" == "$sha" ]]; then
      echo "pinned $name ($bytes bytes, $sha)"
      return
    fi
  fi

  curl -fsSL "$url" -o "$out"
  local got_bytes got_sha
  got_bytes="$(wc -c < "$out" | tr -d ' ')"
  got_sha="$(sha1sum "$out" | awk '{print $1}')"
  if [[ "$got_bytes" != "$bytes" || "$got_sha" != "$sha" ]]; then
    echo "still pin failed for $name: got $got_bytes $got_sha" >&2
    exit 1
  fi
  echo "fetched $name ($bytes bytes, $sha)"
}

BASE="https://davidtphung.github.io/shipfront-the-network/assets/images"

pin procurement.jpg "$BASE/procurement.jpg" 288810 af399d3ccae1fe6beadca14f3bb22e62f4d9d7e2
pin logistics-usa.jpg "$BASE/logistics-usa.jpg" 376501 01268520751d59bf9762d2d7d7c3e1555ba60c8d
pin fulfillment.jpg "$BASE/fulfillment.jpg" 236192 238ec32fdede338cdcbf1a80750df501ba47afff
pin integration.jpg "$BASE/integration.jpg" 198616 dcb6b57acc3b0a95f2db3c33d66d56e7fa672c6b
