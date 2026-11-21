#!/bin/sh
set -e
for source in public/images/*/[0-9][0-9].jpg; do
  width=$(sips -g pixelWidth "$source" | awk '/pixelWidth/ { print $2 }')
  for size in 480 960 1600; do
    target="${source%.jpg}-$size.jpg"
    if [ "$width" -gt "$size" ] && [ ! -f "$target" ]; then
      sips --resampleWidth "$size" -s formatOptions 80 "$source" --out "$target" >/dev/null
    fi
  done
done
