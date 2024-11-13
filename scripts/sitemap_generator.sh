#!/bin/sh

if [ "$VERCEL" = "1" ]; then
  echo "🗺✨ Generating sitemap in Vercel environment..."
  next-sitemap
else
  echo "Skipping sitemap generation - not in Vercel environment"
fi
