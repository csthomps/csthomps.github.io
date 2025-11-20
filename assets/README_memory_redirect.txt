How to make the site link redirect to arXiv instead of the local PDF

1. Create a file named `memory_link_target.txt` inside this same `assets/` folder.
2. Put the full arXiv URL (for example `https://arxiv.org/abs/XXXX.XXXXX`) on the first line.
3. Save and deploy. The page `assets/memory_redirect.html` will prefer that URL and redirect to it.

If the file is absent or empty, the redirect page will open the local `Memory_Learning.pdf`.

Note: The redirect uses a client-side fetch, so it will work on most static hosts (same-origin).
