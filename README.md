# n8n-nodes-factdock

This is an n8n community node for [Factdock](https://fact-dock.com), a multilingual search engine for primary sources. It searches each country's official sites, academic papers, patents, company information, trade rules and public projects in that country's own language, and returns the original sources with URLs, dates and translated titles and summaries.

[n8n](https://n8n.io/) is a fair-code licensed workflow automation platform.

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Usage](#usage)
- [Compatibility](#compatibility)
- [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation and install `n8n-nodes-factdock`.

## Operations

| Resource | Operation | What it does |
|---|---|---|
| Search | Country Web Search | Searches one country in its own language (`cc_JP`, `cc_DE`, `cc_BR` …) or one language sphere (`en_global`, `zh-CN`, `zh-TW`, `es`, `pt`, `fr`, `ar`). Choose official, commercial, local-voice or academic sources. |
| Search | Academic Papers | Scholarly databases ranked by evidence tier; the top results are translated. |
| Search | Patents | One patent office (e.g. `JP`) or the 5 major offices (`US, JP, CN, KR, EP`). |
| Company | Risk Report | Due-diligence report: basic facts, structure, legal, misconduct and reputation, with sources and an overall risk level. Optionally officers and ownership. |
| Trade | Import Rules | Tariffs, regulations, documents and certifications to import a product into a country. |
| Trade | Sanctions Screening | Sanctions and denied-party screening of a company. |
| Government | Infrastructure Projects | Public infrastructure plans, tenders and projects by country and sector. |
| Finance | Country Indicators | Official macro and market indicators for up to 3 countries. |
| Insight | Latest News | Official, regulatory, company and pipeline news from primary sources. |

Every result includes its source URL. An empty result means "not found or not covered", not "safe".

The node can also be used as a tool by n8n AI Agents.

## Credentials

1. Sign in at [fact-dock.com](https://fact-dock.com) and open the **Developers** page (`/developers`).
2. Create a **Platform API** key. (Search tools need a Platform key.)
3. In n8n, create a **Factdock API** credential and paste the key.

The key is sent as `Authorization: Bearer <key>` to `https://data.fact-dock.com`. Testing the credential only lists the available tools and uses no credits.

## Usage

- Each search uses the key holder's prepaid Factdock API credits. Every response includes `credits_used`. Prices: <https://fact-dock.com/en/product/business-api/>
- Some searches (country web search, patents, company reports) can take up to about three minutes; the node waits up to 200 seconds.
- Choose the country yourself for country, patent-office and company operations. When used by an AI Agent, ask the user which country to use.
- Example workflow: *Schedule Trigger → Factdock (Insight: Latest News, category `energy`) → Slack* posts new official energy news every morning.
- Example workflow: *Form Trigger (company name and country) → Factdock (Company: Risk Report) → Google Sheets* builds a supplier check list.

Factdock searches and shows published information for reference. It is not legal, medical, veterinary, financial or investment advice and does not replace a professional's judgement.

## Compatibility

Tested with n8n 1.x (n8n Nodes API version 1).

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Factdock Business API](https://fact-dock.com/en/product/business-api/)
- [Factdock Business API on Postman](https://www.postman.com/factdock/factdock-business-api)
- Contact: info@fact-dock.com
