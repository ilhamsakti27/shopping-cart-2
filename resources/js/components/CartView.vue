<template>
  <div class="container mt-3">

    <ShoppingCart 
      :cartArray="cart" 
      :total="total" 
      @emit-deleteList="deleteList"  
    />
    
    <button 
      id="btn-back"
      type="button" 
      class="btn btn-primary"
      @click="navigateToBack"
    >
      Back
    </button>

    <CheckoutPopup 
      id="btn-checkout"
      class="mt-2" 
      :totalCheckout="total" 
      :showTotal="showTotal"  
    />

  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import './../bootstrap';
import ShoppingCart from './ShoppingCart.vue';
import CheckoutPopup from "./CheckoutPopup.vue";
import { mapGetters  } from "vuex";

export default {
  components: {
    ShoppingCart,
    CheckoutPopup
  },
  computed: {
    ...mapGetters({
      cart: 'getCart',
      total: 'getTotal',
      showTotal: 'getShowTotal'
    })
  },
  methods: {
    navigateToBack() {
      this.$router.go(-1);
    },
    deleteList(index) {
      this.$store.dispatch('deleteList', index);
    },
  }
};
</script>

<style>

#btn-checkout {
  display: inline-block;
  margin-left: 1em;
}
</style>