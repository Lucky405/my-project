# Signal — Personal Portfolio & Research Log

A portfolio/blog site for a student researcher working at the intersection of
AI and medicine. Built with plain HTML/CSS/JS — no build step, no framework,
deploys directly to GitHub Pages.

**Tabs:** About · Research · Activities · Awards · Education · Blog

## ✏️ How to edit your content

Open **`js/content.js`**. That single file holds everything except blog posts:

- Your name, tagline, location, email, GitHub/LinkedIn links
- Your "About Me" paragraphs and current skills/tools
- Your **Research** tab — flagship projects with details, status, and tags
- Your **Activities** tab — organized into categories (Leadership, Entrepreneurship,
  Community, School Clubs, etc.) so it doesn't read as one long undifferentiated list
- Your **Awards** tab — a stat strip plus tiered groups (e.g. National/International
  vs. Regional/State)
- Your **Education** tab (timeline entries with courses)

Each entry is a simple object — copy/paste a block inside the relevant array to
add a new one, or delete a block to remove it. Don't forget commas between entries.

You should not need to touch `index.html`, `css/style.css`, or `js/main.js`
unless you want to change the structure or visual design.

### A note on HTML in your text
The `about.paragraphs` and any `description`/`summary`/`details` fields support
a few basic HTML tags if you want emphasis, e.g. `"I love <strong>research</strong>."`

## ✍️ Writing & publishing blog posts

Unlike the rest of the site, blog posts are **not edited in content.js** — they
live in their own file, **`js/posts.js`**, and there's a writing tool built
into the Blog tab to help you generate the code for each post.

**Why a separate file?** So that a post you write shows up for *every*
visitor on *every* device — not just in your own browser. That only works if
the post data is part of the files GitHub Pages serves to everyone, which
means it has to be committed to the repo, like every other file on the site.

### The workflow

1. Go to the **Blog** tab on your site and click **+ New Post**.
2. Write your post using the formatting toolbar (bold, italic, headings,
   bullet lists, quotes) and pick a font for it.
3. Click **Generate Code** — this does *not* publish anything yet. It just
   converts what you wrote into a ready-to-paste JavaScript object.
4. Click **Copy** to copy that code block.
5. Open `js/posts.js` and paste it as a new entry inside the
   `window.SITE_POSTS = [ ... ]` array (right after the opening `[` is fine —
   the site sorts posts by date automatically, so exact order doesn't matter).
6. Save the file, then commit and push:
   ```bash
   git add js/posts.js
   git commit -m "Add new post: <your title>"
   git push
   ```
7. Wait about a minute for GitHub Pages to rebuild, then refresh your live
   site — the post is now visible to **everyone**, on any device.

### Editing or deleting a post

Open `js/posts.js`, find the post's `{ ... }` block, edit the text directly
(or delete the whole block to remove it), then commit and push the same way.

### Why isn't there just a "Publish" button that does this automatically?

A real one-click publish button needs a server somewhere with permission to
write to your GitHub repo on your behalf (or a database). That's a perfectly
reasonable next step if you want it later — it would let you publish entirely
from your phone without touching git — but it adds a real backend service for
you to set up and maintain. The current setup intentionally keeps everything
static (no server, no accounts, no cost), which is also why it deploys to
GitHub Pages for free in the first place. If you later want the one-click
version, that's a good "phase two" project — ask Claude to help you build a
small serverless function for it.

## 👀 Preview locally

Just open `index.html` directly in your browser — there's no build process.
If your browser blocks local file requests, run a tiny local server instead:

```bash
# from inside the project folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🚀 Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `your-portfolio`).
2. Push this folder's contents to the repo's `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch."
5. Set **Branch** to `main` and folder to `/ (root)`. Save.
6. Wait a minute or two — your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

   (If your repo is named exactly `YOUR_USERNAME.github.io`, your site will
   instead live at the root: `https://YOUR_USERNAME.github.io/`.)

Every time you edit `js/content.js` and push to `main`, the live site
updates automatically within a minute or so.

## 🎨 Design notes

The visual language ties directly to the research subject matter: a hero
graphic styled as a molecular binding / graph neural network diagram (reading
as both a protein structure and a neural net), a phosphor-green/coral palette
borrowed from clinical displays, and tabs styled like switching a channel on
a monitor. Fonts: Fraunces (display), IBM Plex Sans (body), IBM Plex Mono
(data/labels). There's a light/dark display toggle in the header.

Activities and Awards are grouped into labeled categories/tiers rather than
flat lists, so dense content stays scannable instead of generic.

## 📁 File structure

```
.
├── index.html        ← page structure (rarely needs editing)
├── css/style.css      ← all styling/design tokens
├── js/content.js       ← ⭐ YOUR CONTENT (About/Research/Activities/Awards/Education)
├── js/posts.js         ← ⭐ YOUR BLOG POSTS — paste generated post code here
├── js/main.js          ← rendering, interactions, and blog editor logic
├── .nojekyll           ← tells GitHub Pages to skip Jekyll processing
└── README.md
```
