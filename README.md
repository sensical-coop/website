# Sensical site

This is the repository containing Sensical SCCL website. The website is built using [hugo](https://gohugo.io), building upon [zerostatic/hugo-hero-theme](https://github.com/zerostaticthemes/hugo-hero-theme).

## Installation

The installation steps are adapted from the _zerostatic_ README.

### 1. Install Hugo**

To use this theme you will first need to have Hugo installed. Please follow the official [installation guide](https://gohugo.io/getting-started/installing/)

⚠️ **Note:** Check your Hugo version - **Hugo Extended** is required!

This theme uses [Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/) to compile SCSS and minify assets which means if you not using the Hugo extended version this theme will not work. To check your version of Hugo, run  `hugo version`. Make sure you see __/extended__ after the version number, for example _Hugo Static Site Generator v0.82.0/extended darwin/amd64 BuildDate: unknown_ You do not need to use version v0.82.0 specifically, it just needs to have the _/extended_ part.

### 2. Clone the repository

Download or git clone this repository:

```
git clone https://github.com/sensical-coop/sensical-website.git
```
### 3. Run Hugo**

For local development run Hugo's built-in local server.

```
hugo server
```

Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.