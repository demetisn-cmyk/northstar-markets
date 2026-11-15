# Northstar news and intelligence method

Northstar is not a newly trained financial model. It uses a transparent retrieval and scoring pipeline; the analysis shown in v1 is generated from observed prices, current headlines, publication times, source identity, and independent corroboration.

## News collection and ranking

- Search recent public news through GDELT DOC and Google News RSS; supplement with Federal Reserve and BLS public RSS feeds.
- Reject items older than 48 hours, cluster near-duplicate headlines, and keep links to the originating article(s).
- Require a market channel: macroeconomic data or policy, a material event at a tracked company, a consequential sector event, or a broad market move reported by an established source. Generic politics and generic technology coverage are excluded.
- Rank using recency, source quality, topic impact, and independent corroboration. Known financial/news providers and primary .gov sources can qualify alone; otherwise require corroboration across sources.
- Keep categorization explainable: macroeconomics, politics/regulation, technology, or company news.
- Do not fill empty periods with stale or generated headlines.

## Event interpretation

- Always show index direction, breadth across the tracked companies, and the leading and lagging names. Show all three indices and the largest company moves, even when there is no meaningful change between refreshes.
- Compare company returns with a broad index and match news by company, sector, or macro theme. Surface the match alongside the evidence rather than asserting it caused the move.
- Use the provider's market state when available; otherwise infer that the US cash market is closed outside regular weekday hours in New York. Closed-market values are labeled as the latest available session.
- Report the observed move separately from a possible catalyst. A matching headline is evidence to investigate, not proof that it caused the move.
- Confidence stays low unless multiple independent sources support a direct match. If no matching item qualifies, state that plainly and give relative performance context rather than inventing a catalyst.
- Every interpretation links its source and displays the timestamp. The page is informational, not a forecast or personal investment recommendation.

## Research basis

This workflow follows investor-education principles on volatility, risk, skepticism toward market tips, and the limits of interpreting short-term moves:

- FINRA, [Market Volatility](https://syndication.finra.org/content/market-volatility-check-emotions-door)
- FINRA, [Investor Tips for Turbulent Markets](https://syndication.finra.org/content/investor-tips-turbulent-markets-0)
- SEC, [EDGAR APIs and company filings](https://www.sec.gov/search-filings/edgar-application-programming-interfaces)
- Federal Reserve, [official RSS feeds](https://www.federalreserve.gov/feeds/feeds.htm)
- Bureau of Labor Statistics, [official RSS feeds](https://www.bls.gov/feed/)

This is source-grounded product logic, not model training or fine-tuning. A language model API would be required for deeper generated explanation; v1 intentionally limits its claims to evidence it can retrieve and show.

