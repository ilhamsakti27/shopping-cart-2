import { createStore } from 'vuex';
// import productsData from './../../productsData.json';
import axios from 'axios';

export default createStore({
  state: {
    // products: productsData,
    products: null,
    cart: [],
    quantityItem: 0,
    total: 0,
    showTotal: null
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    },
    getTotal(state) {
      return state.total;
    },
    getShowTotal(state) {
      return state.showTotal;
    },
    getQuantityItem(state) {
      return state.quantityItem;
    }
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      // decrement item of product 
      for (const item of state.products) {
        if (item.name == payload.name) {
          item.data.stock--;
          break;
        }
      }

      // add item into cart
      if(!state.cart.length) {
          // tambahkan item baru ke keranjang
          state.cart.push(payload);
          state.quantityItem++;
          return;
        }
        else {
          let i = 0;
          for (const item of state.cart) {
            if (item.name == payload.name) {
              // add quantity in cart
              item.quantity++;
              state.quantityItem++;
              return;
            }
            i++;
          }
  
          // add new item into cart
          state.cart.push(payload);
          state.quantityItem++;
        }
    },
    DELETE_ITEM(state, payload) {
      // kembalikan stock item product ke seperti semula
      for (const productItem of state.products) {
        if (state.cart[payload].name == productItem.name) {
          productItem.data.stock += state.cart[payload].quantity;
          state.quantityItem = state.quantityItem - state.cart[payload].quantity;
        }
      }

      // hapus item dari keranjang dan hitung total harga
      state.cart.splice(payload, 1);
    },
    TOTAL_PRICE(state) {
      if (state.cart.length) {
        // hitung total harga dengan kuantitas dikali harga
        state.total = 0;
        for (const item of state.cart) {
          state.total = state.total + (item.quantity * item.price);
        }
      }
      else {
        state.total = 0;
      }

      state.showTotal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(state.total);
    },
    UPDATE_DATA(state, payload) {
      state.products = payload
      console.log(payload);
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit('ADD_TO_CART', payload);
      context.commit('TOTAL_PRICE', payload);
    },
    deleteList(context, payload) {
      context.commit('DELETE_ITEM', payload);
      context.commit('TOTAL_PRICE', payload);
    },
    async getAllData(context) {
      let response = await axios.get("api/getAllData");
      context.commit("UPDATE_DATA", response.data);
    }
  
  },
});
