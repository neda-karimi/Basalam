<template>
  <div class="background">
    <Header />
    <PaymentBar />
    <OfferPart />
    <IPGPart />
    <SummaryOfOrder />
    <VendorInPayment v-for="vendor in Information" :key="vendor.id" :vendor="vendor" />
    <PayButton/>
  </div>
</template>
<script>
import Header from "../src/component/homePage/Header";
import PaymentBar from "../src/component/PaymentPage/PaymentBar";
import OfferPart from "../src/component/PaymentPage/OfferPart";
import IPGPart from "../src/component/PaymentPage/IPGPart";
import SummaryOfOrder from "../src/component/PaymentPage/SummaryOfOrder";
import VendorInPayment from "../src/component/PaymentPage/VendorInPayment";
import ProductInPayment from "../src/component/PaymentPage/ProductInPayment";
import PayButton from "../src/component/PaymentPage/PayButton";
export default {
  computed: {
    Information() {
      return this.$store.state.info;
    },
  },
  components: {
    Header,
    PaymentBar,
    OfferPart,
    IPGPart,
    SummaryOfOrder,
    VendorInPayment,
    ProductInPayment,
    PayButton,
  },
};
</script>
<style scoped>
.background{
    background-color: #EEEEEE;
}
</style>