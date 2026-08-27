# Vslukh privacy policy

The public bilingual privacy-policy site for the Vslukh Telegram text-to-speech bot.
It describes the bot application's processing, storage, logging, Telegram boundary,
and the policy site's own limited data surface in English and Russian.

The site has one public route and no account, form, analytics, application database, or
data API. D1 and R2 remain disabled in `.openai/hosting.json`.

## Development

Node.js `>=22.13.0` is required.

```bash
npm install
npm run dev
npm test
```

`npm test` creates the production build and verifies that it server-renders the complete
bilingual policy without starter preview or identity-aware capabilities.
