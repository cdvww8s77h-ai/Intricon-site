#!/bin/sh
# Publish the site: commits every change and pushes to GitHub.
# Vercel redeploys the live site automatically from each push (under a minute).
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
echo "Pushed. Vercel will redeploy the live site shortly."
