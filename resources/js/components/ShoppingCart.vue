<template>
  <div>
    <h3 class="display-4">Keranjang Belanja</h3>

    <table class="table">
      <thead>
        <tr class="table-info">
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartArray" :key="index">
          <td scope="row">{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ formatRupiah(item.price*item.quantity) }}</td>
          <td><button type="button" class="btn btn-danger" @click="deleteList(index)">Delete</button></td>
        </tr>
        <tr class="table-success">
          <td scope="row" colspan="2"><b>Total</b></td>
          <td><b>{{ formatRupiah(total) }}</b></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  emits: ['emit-deleteList'],
  props: ['cartArray', 'total'],
  methods: {
    deleteList(index) {
      this.$emit('emit-deleteList', index);
    },
    formatRupiah(value) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
    }
  }
}
</script>