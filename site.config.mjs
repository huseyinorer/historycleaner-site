// Website settings. Edit, then:  cd tools && npm run site
export const SITE = {
  domain: 'historycleaner.app',
  email: 'support@historycleaner.app',

  // REQUIRED before applying to Paddle: your legal name (sole trader) or registered company name.
  // It appears in the Terms, Refund Policy, Privacy Policy and the footer.
  sellerName: 'Hüseyin Örer',

  // Chrome Web Store listing URL, e.g. https://chromewebstore.google.com/detail/<name>/<id>
  cwsUrl: '',

  price: '$5.99',
  refundDays: 14,
  trialDays: 14,

  // Paddle Billing (Paddle → Developer tools → Authentication → client-side token; Catalog → product → price ID).
  // Both values are public by design and safe to put on the website.
  // Empty = /buy/ shows "purchases open soon" instead of a checkout.
  paddle: {
    environment: 'sandbox',   // 'sandbox' for testing, 'production' for real sales
    clientToken: '',          // test_… (sandbox) or live_… (production)
    priceId: ''               // pri_…
  },

  lastUpdated: '2026-11-18'
};
