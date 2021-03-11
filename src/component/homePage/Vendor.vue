<template>
  <div>
    <div class="container3">
      <div class="vendorname">
        از غرفه:
        <h5 style="margin-top: 3px">{{ vendor.vendor.name }}</h5>
      </div>
      <div class="flexforvendor">
        <img class="vendorpic" :src="vendor.vendor.owner.avatarUrl" />
        <div class="info">
          <h4 class="name">{{ vendor.vendor.owner.name }}</h4>
          <div class="container-location">
            <img src="/fontsandicons/icon/location.png" />
            <h4 class="vendorlocation">{{ vendor.vendor.owner.city}}</h4>
          </div>
        </div>
      </div>
    </div>
    <Product
      v-for="product in vendor.items"
      :key="product.id"
      :product="product"
      :vendorId="vendor.id"
    ></Product>

    <FrameAndTickets v-if="totalprice >= 200000"></FrameAndTickets>
    <SaveAndPrice :totalprice="totalprice" :number="vendor.items.length"></SaveAndPrice>
  </div>
</template>
<script>
import Product from "./Product.vue";
import FrameAndTickets from "./FrameAndTicket";
import SaveAndPrice from "./SaveAndPrice";
import { mapMutations, Mutation } from "vuex";
import FrameTwo from "./FrameTwo";

export default {
  components: {
    Product,
    FrameAndTickets,
    SaveAndPrice,
    FrameTwo,
  },  
  props: ["vendor"],
  created() {
    console.log(this.vendor)
  },
  computed: {
    totalprice() {
      let sum = 0;
      for (let index = 0; index < this.vendor.items.length; index++) {
        sum += this.vendor.items[index].quantity * this.vendor.items[index].product.price;
        
      }
      return sum;
    },
  },
};
</script>
<style scoped>
.container3 {
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
}
.vendorname {
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
  font-size: 14px;
  margin-right: 10px;
  align-items: flex-start;
  background-color: #ffffff;
  width: 100%;
  justify-content: flex-start;
  padding-right: 16px;
}
.flexforvendor {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.vendorpic {
  width: 40px;
  height: 40px;
  display: flex;
  margin-top: 14px;
  margin-right: 15px;
  align-items: center;
  border-radius: 50%;
}
.info {
  color: rgba(62, 62, 62, 1);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 8px;
}
.container-location{
  display: flex;
}
.name {
  font-size: 12px;
  display: flex;
  padding-right: -35px;
}
.vendorlocation {
  font-size: 10px;
  margin-right: 3px;
}
</style>