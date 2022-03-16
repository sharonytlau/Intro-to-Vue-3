const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    addToCart(id) {
      this.cart.push(id);
      console.log(this.cart);
    },
    removeFromCart(id) {
      this.cart.splice(this.cart.indexOf(id), 1);
      console.log(this.cart);
    },
  },
});
