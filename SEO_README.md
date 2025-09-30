SEO checklist for FC Fulbert

This file lists the steps taken and recommended next actions to maximize SEO and discoverability.

What I implemented:
- Added extensive meta tags in `index.html` (title, description, keywords, news_keywords, robots).
- Added Open Graph and Twitter Card tags in `index.html` and per-event pages.
- Added JSON-LD: a `SportsTeam` block in `index.html` and per-event JSON-LD on event pages.
- Created static event pages in `/events/` with canonical tags and JSON-LD.
- Updated `sitemap.xml` and `robots.txt` to include event pages and point to sitemap.
- Added `feed.xml` (RSS) for events to help discovery.

Recommended next steps (high priority):
1. Register the site in Google Search Console and submit `sitemap.xml`.
2. Run the Rich Results Test (search.google.com/test/rich-results) on event pages to ensure JSON-LD is valid.
3. Monitor Coverage and Enhancements reports in Search Console for structured data errors.
4. Add alternate-language links (hreflang) if you plan a multi-language site.
5. Integrate a real form backend (Formspree/Netlify/Google Forms) and add `rel="nofollow"` or spam protection if necessary.

Performance & technical SEO:
- Use PageSpeed Insights (pagespeed.web.dev) to check performance; optimize images (WebP/AVIF), enable compression, add caching headers.
- Consider pre-rendering or server-side rendering for large dynamic sections if crawlers miss client-rendered content.

Content & editorial:
- Produce unique, helpful content for each event (detailed schedule, teams, results, galleries).
- Avoid keyword stuffing; write naturally and include location-based keywords when relevant (e.g., "Chartres football club").
- Encourage backlinks from local directories, partner clubs, and social profiles.

How to validate:
- Use the Rich Results Test for structured data.
- Use the URL Inspection tool in Search Console to check how Google crawls and indexes pages.

If you want, I can:
- Automate generation of event pages from `data/events.json` with a small Node script.
- Integrate a Formspree endpoint for real signups and wire the form to it.
- Run the Rich Results Test programmatically for pages and fix validation errors.
