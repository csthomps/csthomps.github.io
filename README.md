# Personal site (GitHub Pages)

This repository contains a minimal personal website for the `csthomps` GitHub Pages site.

Files added:

- `index.html` — Main site HTML
- `styles.css` — Simple responsive styles
- `script.js` — Small UI helpers (nav toggle, dynamic year)
- `assets/profile.svg` — Placeholder avatar

How to preview locally

1. From the repository root run a simple HTTP server (Python 3):

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Deploy to GitHub Pages

1. Push this repository to GitHub if it's not already there.
2. In your repository settings -> Pages, set the site source to the `main` branch and the `/ (root)` folder.
3. Save — GitHub will publish shortly at `https://csthomps.github.io/`.

Customize

- Replace `assets/profile.svg` or point `index.html` to your preferred profile image.
- Edit the name, tagline, project cards, and contact email in `index.html`.
- Add project pages or link to repos as needed.
