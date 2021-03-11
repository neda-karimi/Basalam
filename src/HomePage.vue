<template>
  <div id="app">
    <Header />
    <Tabs />
    <Vendor v-for="vendor in Information" :key="vendor.id" :vendor="vendor" />
    <TotalSaveAndPrice :countVendor="Information.length" :itemsOfVendor="getTotalCount" :items="number"  />

  </div>
</template>
<script>
import Header from "./component/homePage/Header";
import Tabs from "./component/homePage/Tabs.vue";
import Vendor from "./component/homePage/Vendor.vue";
import TotalSaveAndPrice from "./component/homePage/TotalSaveAndPrice.vue";

export default {
  name: "app",
  data(){
    return {
      number:0
    }

  },
  computed:{
    Information(){
      return this.$store.state.info
    },
   getTotalCount(){
      let sum = 0;
      for (let index = 0; index <  this.Information.length; index++) {
	for(let index2=0;index2<this.Information[index].items.length;index2++){
    this.number++;
		sum+=this.Information[index].items[index2].quantity*this.Information[index].items[index2].product.price
		}
      }
     
      return sum;
    
    }
  },
  created(){
  },
  methods:{
     
  },
  components: { Header, Tabs, Vendor,TotalSaveAndPrice },
 
};
</script>