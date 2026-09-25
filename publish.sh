#!/bin/sh
# Publish the site: commits every change and pushes to GitHub.
# GitHub Pages rebuilds the live site automatically (about a minute).
#   Usage:  ./publish.sh "Added Hillside House photos"
set -e
cd "$(dirname "$0")"
git add -A
if git diff --cached --quiet; then
  echo "Nothing new to publish."
else
  git commit -m "${1:-Update site}"
fi
git push -u origin main
echo "Pushed. The live site updates in about a minute."
