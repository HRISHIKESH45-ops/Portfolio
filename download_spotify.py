import urllib.request
import os

repo_url = "https://raw.githubusercontent.com/HRISHIKESH45-ops/spotify-music-analytics-dashboard/main/Screenshots/"
files = [
    "Artist%20Performance%20Hub.png",
    "Audio%20DNA%20Lab.png",
    "Executive%20Overview.png",
    "Music%20Evolution%20Timeline.png",
    "Platform%20Wars.png"
]

os.makedirs("public/images/spotify", exist_ok=True)

for file in files:
    url = repo_url + file
    filename = "public/images/spotify/" + file.replace("%20", "_")
    print(f"Downloading {url} to {filename}...")
    urllib.request.urlretrieve(url, filename)

print("Done.")
