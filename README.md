# ~/yourname — personal site

A terminal-flavoured personal site built with [Jekyll](https://jekyllrb.com)
and [terminal.css](https://terminalcss.xyz), ready for GitHub Pages.

**Features**

- `› home  blog  projects …` navigation (arrow marks the current page), number-key shortcuts (`1`–`6`) and `t` to cycle themes
- Light / dark / auto theme (remembers your choice)
- Home page: name, typewriter tagline, avatar, short bio + quick facts, latest post + project and recent posts
- Blog grouped by year with a live `grep` filter, reading time, prev/next links
- Projects page with tag filter, talks timeline, man-page-style résumé that prints cleanly to PDF
- `/path: No such file or directory` 404 page
- RSS feed, SEO tags and sitemap (all GitHub Pages–whitelisted plugins)

## Make it yours

| What | Where |
|---|---|
| Name, tagline, bio, quick facts, social links, status bar, nav | `_config.yml` |
| Projects (newest first) | `_data/projects.yml` |
| Talks | `_data/talks.yml` |
| Résumé | `_data/resume.yml` + `resume.md` |
| About page | `about.md` |
| Avatar | replace `assets/images/avatar.svg` (or point `avatar:` at a .png/.jpg) |
| Colours | the variables at the top of `assets/css/main.css` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |

Delete the two sample posts in `_posts/` when you're ready.

## Run locally

```bash
bundle install
bundle exec jekyll serve --livereload
# open http://localhost:4000
```

## Deploy to GitHub Pages

1. Create a repo named **`<your-username>.github.io`** (user site) — or any name for a project site.
2. Push these files to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Set `url` in `_config.yml` to `https://<your-username>.github.io`.
   For a project site also set `baseurl: "/<repo-name>"`.
5. Wait ~1 minute and visit your site.

**Custom domain:** add a `CNAME` file containing your domain (e.g. `yourname.dev`),
point a DNS record at GitHub Pages, and update `url` in `_config.yml`.
