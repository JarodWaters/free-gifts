// Related: https://github.com/remix-run/remix/issues/2835#issuecomment-1144102176
// Replace the HOST env var with SHOPIFY_APP_URL so that it doesn't break the remix server. The CLI will eventually
// stop passing in HOST, so we can remove this workaround after the next major release.
if (
  process.env.HOST &&
  (!process.env.SHOPIFY_APP_URL ||
    process.env.SHOPIFY_APP_URL === process.env.HOST)
) {
  process.env.SHOPIFY_APP_URL = process.env.HOST;
  delete process.env.HOST;
}

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  serverModuleFormat: "cjs",
  dev: { port: process.env.HMR_SERVER_PORT || 8002 },
  future: {},
};


// remix.config.js

class DiscountTier {
  constructor(cartValue, products) {
    this.cartValue = cartValue;
    this.products = products; // This could be an array of product IDs
  }
}

module.exports = {
  // ...
  routes: {
    // ...
    '/api/discounts': async (req, res) => {
      const { cartValue, products } = JSON.parse(req.body);
      const discountTier = new DiscountTier(cartValue, products);
      // TODO: Save the discountTier to your database
      res.sendStatus(200);
    },
  },
};