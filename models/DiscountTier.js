// models/DiscountTier.js

class DiscountTier {
    constructor(cartValue, products) {
      this.cartValue = cartValue;
      this.products = products; // This could be an array of product IDs
    }
  }
  
  module.exports = DiscountTier;