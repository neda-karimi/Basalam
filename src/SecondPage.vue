<template>
  <div>
    <Header />
    <BackAndNew />
    <Address v-for="Address in Information" :key="Address.id" :Address="Address" />
     <SpaseBetween />
    <GoForBuying  :itemsOfVendor="getTotalCount" />
   
   
  </div>
</template>
<script>
import Header from "./component/homePage/Header";
import BackAndNew from "./component/pageTwoComponent/BackAndNew";
import Address from "./component/pageTwoComponent/Address.vue";
import GoForBuying from "./component/pageTwoComponent/GoForBuying.vue";
import SpaseBetween from "./component/pageTwoComponent/SpaceBetween";
export default {
     data(){
    return{
      Information: this.$store.getters.getStartedAddress
       
     
    }
  },
  computed: {
    information(){
      return this.$store.state.info
    },
    getTotalCount(){
      let sum = 0;
      for (let index = 0; index <  this.information.length; index++) {
        for(let index2=0;index2<this.information[index].items.length;index2++){
          sum+=this.information[index].items[index2].quantity*this.information[index].items[index2].product.price
        }
      }
     
      return sum;
    
    }
  },
  components: {
    Header,
    BackAndNew,
    Address,
    GoForBuying,
    SpaseBetween,
  },
  methods:{
      neda() {
           console.log(this.AddressStore.getters.getStarted);
      }
  }
};
</script>