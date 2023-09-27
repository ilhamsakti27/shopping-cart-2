<template>
  <div>
    <h3 class="display-4">Semua Product</h3>
    <table class="table">
      <thead>
        <tr class="table-info">
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Stock</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="index">
          <td scope="row">{{ item.name }}</td>
          <td>{{ item.data.description }}</td>
          <td>{{ item.data.stock }}</td>
          <td>{{ formatRupiah(item.data.price) }}</td>
          <td><button type="button" class="btn btn-primary" @click="addToCart(index)" :class="{ 'disabled': item.data.stock == 0}">Add to cart</button></td>
        </tr>
      </tbody>
    </table> 
  </div>
</template>
<script>
export default {
  emits: ['emit-addToCart', 'emit-formatRupiah'],
  props: ['products'],
  methods: {
    addToCart(index) {
      this.$emit('emit-addToCart', index);
    },
    formatRupiah(value) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
    }
  }
}
</script>