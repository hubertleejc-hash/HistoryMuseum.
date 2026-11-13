#!/bin/bash
# One-off: save sample responses from the open-access museum APIs, to design the gatherer.
set -x
mkdir -p tools/art/probe && cd tools/art/probe
UA="Contemporaries-museum-app/1.0 (open-access art gatherer)"
curl -gsS -A "$UA" "https://api.artic.edu/api/v1/artworks/search?q=landscape&query[term][is_public_domain]=true&limit=3&fields=id,title,artist_display,artist_title,date_display,date_start,date_end,place_of_origin,medium_display,credit_line,main_reference_number,image_id,thumbnail,description,short_description,classification_title,department_title,style_title,artwork_type_title,is_public_domain,is_boosted" -o aic.json
curl -gsS -A "$UA" "https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=1&fields=id" -o aic-total.json
ID=$(python3 -c 'import json;print(json.load(open("aic.json"))["data"][0]["image_id"])')
echo "AIC image $ID" > img.txt
curl -sS -A "$UA" -o /dev/null -w "aic843 %{http_code} %{size_download}\n" "https://www.artic.edu/iiif/2/$ID/full/843,/0/default.jpg" >> img.txt
curl -sS -A "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15" -o /dev/null -w "aic300-browserUA %{http_code} %{size_download}\n" "https://www.artic.edu/iiif/2/$ID/full/300,/0/default.jpg" >> img.txt
curl -sS -A "$UA" -o /dev/null -w "aic300 %{http_code} %{size_download}\n" "https://www.artic.edu/iiif/2/$ID/full/300,/0/default.jpg" >> img.txt
curl -gsS -A "$UA" "https://collectionapi.metmuseum.org/public/collection/v1.1/search?q=sunflowers&hasImages=true&isPublicDomain=true&limit=3" -o met11.json
curl -sS -A "$UA" "https://metmuseum.github.io/" -o met-docs.html
curl -sS -o /dev/null -w "met-mobile %{http_code} %{size_download}\n" "https://images.metmuseum.org/CRDImages/as/mobile-large/DP251139.jpg" >> img.txt
curl -sS -o /dev/null -w "met-weblarge %{http_code} %{size_download}\n" "https://images.metmuseum.org/CRDImages/as/web-large/DP251139.jpg" >> img.txt
curl -sS -r 0-3000 "https://raw.githubusercontent.com/NationalGalleryOfArt/opendata/main/data/published_images.csv" -o nga-images-head.csv
curl -sS -r 0-3000 "https://raw.githubusercontent.com/NationalGalleryOfArt/opendata/main/data/objects.csv" -o nga-objects-head.csv
curl -sS "https://api.github.com/repos/ClevelandMuseumArt/openaccess/contents/data" -o cma-repo.json
curl -sS "https://openaccess-api.clevelandart.org/api/artworks/?cc0=1&has_image=1&limit=1&skip=0" -o cma-total.json
python3 - <<'PY' > counts.txt
import json, urllib.request
def get(u):
    return json.load(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "Contemporaries"})))
print("cma cc0+image", get("https://openaccess-api.clevelandart.org/api/artworks/?cc0=1&has_image=1&limit=1")["info"]["total"])
for dept in ["Chinese Art","Japanese Art","Indian and Southeast Asian Art","Islamic Art","African Art","Egyptian and Ancient Near Eastern Art","Greek and Roman Art","Art of the Americas","European Painting and Sculpture","Prints","Photography","Textiles","Medieval Art","Korean Art","Drawings","Oceania"]:
    try: print(dept, get("https://openaccess-api.clevelandart.org/api/artworks/?cc0=1&has_image=1&limit=1&department=" + urllib.parse.quote(dept))["info"]["total"])
    except Exception as e: print(dept, e)
PY
ls -la
