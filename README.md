# Northstar Markets

Personal dashboard for U.S. market indices and large-cap companies, with a filtered news desk and evidence-aware market commentary.

## Public link and updates

The static dashboard is published through GitHub Pages. A scheduled GitHub Actions workflow collects Yahoo Finance chart snapshots and filtered news feeds every five minutes on weekdays, then publishes the JSON data files. Refresh cadence depends on GitHub Actions scheduling and upstream source availability; quotes can be delayed and are not exchange-grade real-time data.

To enable the site, choose **Settings → Pages → Deploy from a branch → main → /(root)** in the repository. The site URL is `https://demetisn-cmyk.github.io/northstar-markets/`.

The data collector uses the existing Node server as a short-lived local service in the workflow runner; the browser pages read the published files from `data/`.

Greek-language personal market dashboard. Start with `node server.mjs` and open `http://127.0.0.1:8000` (or the configured `PORT`).

## Data and updates

- Market snapshots come from the Yahoo Finance chart endpoint and refresh once per minute. The source is unofficial and may be delayed.
- News search combines GDELT DOC, Google News RSS, and Federal Reserve/BLS official RSS feeds. It refreshes every five minutes; if one provider is unavailable, the other feeds can still supply results.
- The News page keeps recent items with a specific market channel, ranks them by recency and source quality, groups near-duplicate coverage, and explains why each selected story could matter. Some quiet periods may still have few qualified stories.
- Economic Intelligence refreshes with each price snapshot. It always shows the index trend, market breadth, leading and lagging tracked names, and relative performance; it then matches relevant news where possible. A matching headline is not treated as proof of cause.
- When US regular trading is closed, values are identified as the latest available session rather than live trading prices.

## Limits

The Composio/X connector is unavailable in this runtime. The dashboard therefore does not search X. News uses public web coverage and official sources instead. There is no API key, model training, or fine-tuning. Analysis v1 uses transparent, rule-based evidence matching informed by the methodology documented in `ANALYSIS_METHOD.md`.

## Files

- `server.mjs` — HTTP server, market data adapter, RSS/GDELT collection, deduplication, scoring, and move analysis
- `index.html` — markets, Economic Intelligence, and News views
- `styles.css` — responsive visual system
- `app.js` — navigation, quote/news refresh, evidence rendering, and filters
- `ANALYSIS_METHOD.md` — ranking and interpretation rules with research basis

