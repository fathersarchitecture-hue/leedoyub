# leedoyup

Portfolio website for visual artist leedoyup.

Single HTML file — no build step, no dependencies. Deploys directly to Cloudflare Pages or any static host.

## Structure

```
index.html   ← entire site (CSS + JS inline)
README.md
.gitignore
```

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a new project and connect the repo.
3. Build command: *(leave empty)*
4. Output directory: `/` (repository root)

## Local preview

```sh
open index.html
# or
python3 -m http.server 8080
```
