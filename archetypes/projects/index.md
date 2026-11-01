---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
seoTitle: ""
description: ""
draft: true
featured: false
weight: 100
translationKey: {{ .File.ContentBaseName }}
heroHeading: "{{ replace .File.ContentBaseName "-" " " | title }}"
heroSubHeading: ""
# Key facts, shown in a box under the banner and on the card
client: ""
year: {{ now.Year }}
location: ""
partners: []
# Services used, by their translationKey (environmentaldatacollection, cocreation).
# The service pages list this project automatically.
services: []
labels: []
# Card cover: a file in this folder (resized to webp) or a path under static/
image: ""
# Gallery carousel after the text. Strings, or maps with src/alt/caption
images: []
# Gallery options: "cover" (crop, default) or "contain"; aspect ratio, default 16/10
galleryFit: ""
galleryRatio: ""
---

One or two sentences: the problem and what we built. This is the card text when there is no description.

## The challenge

## What we did

{{ "{{<" }} carousel {{ ">}}" }}
![Alt text](photo-1.jpg "Optional caption")
![Alt text](photo-2.jpg)
{{ "{{<" }} /carousel {{ ">}}" }}

## Results
