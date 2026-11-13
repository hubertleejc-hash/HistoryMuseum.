#!/bin/bash
# One-off: save sample responses from the open-access museum APIs, to design the gatherer.
set -x
mkdir -p tools/art/probe && cd tools/art/probe
curl -sS "https://api.artic.edu/api/v1/artworks/search?q=landscape&query[term][is_public_domain]=true&limit=3&fields=id,title,artist_display,date_display,date_start,date_end,place_of_origin,medium_display,dimensions,credit_line,main_reference_number,image_id,thumbnail,description,short_description,classification_title,department_title,style_title,artwork_type_title,is_public_domain,copyright_notice,colorfulness,has_not_been_viewed_much,artist_ids,artist_title" -o aic.json
curl -sS "https://openaccess-api.clevelandart.org/api/artworks/?cc0=1&has_image=1&limit=3&q=china" -o cma.json
curl -sS "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isHighlight=true&q=*" -o met-search.json
curl -sS "https://collectionapi.metmuseum.org/public/collection/v1/objects/45734" -o met-obj.json
curl -sS "https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=0" -o aic-total.json
curl -sS "https://openaccess-api.clevelandart.org/api/artworks/?cc0=1&has_image=1&limit=1&skip=0" -o cma-total.json
ID=$(python3 -c 'import json;print(json.load(open("aic.json"))["data"][0]["image_id"])')
curl -sS -o /dev/null -w "aic iiif %{http_code} %{size_download}\n" "https://www.artic.edu/iiif/2/$ID/full/843,/0/default.jpg" -A "Mozilla/5.0" > iiif.txt
curl -sS -I "https://www.artic.edu/iiif/2/$ID/full/400,/0/default.jpg" >> iiif.txt
curl -sS -I "https://openaccess-cdn.clevelandart.org/1916.1122/1916.1122_web.jpg" >> iiif.txt
curl -sS -o /dev/null -w "nga %{http_code}\n" "https://api.nga.gov/" >> iiif.txt
curl -sS -I "https://raw.githubusercontent.com/NationalGalleryOfArt/opendata/main/data/objects.csv" >> iiif.txt
ls -la
