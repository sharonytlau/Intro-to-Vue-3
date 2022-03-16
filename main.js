const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      onSale: true,
      brand: "Vue Mastery",
      image: "./assets/images/socks_blue.jpg",
      inStock: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    selectedVariant(id) {
      return this.variants.filter((el) => el.id === id)[0];
    },
    update(id) {
      selectedVariant = this.selectedVariant(id);
      this.image = selectedVariant.image;
      this.inStock = selectedVariant.quantity;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    onSaleTitle() {
      return `${this.brand} ${this.product} is on sale`;
    },
  },
});
