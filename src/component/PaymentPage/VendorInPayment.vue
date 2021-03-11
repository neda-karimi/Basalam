<template>
<div>
     <div class="vendor">از غرفه:{{ vendor.vendor.name }}</div>
      <Product
      v-for="product in vendor.items"
      :key="product.id"
      :product="product"
      :vendorId="vendor.id"
    ></Product>
</div>
</template>
<script>
import Product from "../PaymentPage/ProductInPayment";
export default {
    components:{
        Product
    },
      props: ["vendor"],
}
</script>
<style scoped>
 .vendor{
      background-color: #FFFFFF;
    font-size: 14px;
    padding:10px 10px;
    color: rgba(62, 62, 62, 1);
  }
</style>