<template>
  <div class="container mt-3">
    <!-- product list -->
    <Products class="mt-3" :products="products" @emit-addToCart="addToCart" @emit-formatRupiah="formatRupiah" />
    
    <button 
      type="button" 
      class="btn btn-success mt-3"
      @click="navigateToCart"
    >
      Cart ({{ quantityItem }})
    </button>

  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import './../bootstrap';
import Products from './Products.vue';
import { mapGetters  } from "vuex";

export default {
  components: {
    Products,
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
      cart: 'getCart',
      quantityItem: 'getQuantityItem',
      total: 'getTotal',
      showTotal: 'getShowTotal'
    })
  },
  methods: {
    showDataProducts() {
      console.log(this.products);
    },
    addToCart(index) {
      const newItem = {
        name: this.products[index].name,
        quantity: 1,
        price: this.products[index].data.price
      }

      // call action vuex
      this.$store.dispatch('addToCart', newItem);
    },
    navigateToCart() {
      this.$router.push({ name: 'cart'});
    },
    formatRupiah(value) {
      const price = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
      return price;
    },
    // ???
    getData() {
      if(!this.products) {
        console.log('Haii boss')
        this.$store.dispatch('getAllData');
      }
    }
   },
   mounted() {
    this.getData();
   }
};
</script>