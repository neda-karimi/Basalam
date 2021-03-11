<template>
  <div>
 
    <div v-if="watcher" class="loading">
      <button class="loadingbutton" @click="getInformation()">try Again</button>
       
    </div>
      
    <div id="app">
      <h1 v-if="loadingwatcher">در حال دریافت اطلاعات</h1>
      <router-view />
    </div>
  </div>
</template>

<script>
import HomePage from "./HomePage";
import { mapActions } from "vuex";
import store from "../src/store/store";

export default {
  name: "app",
  data() {
    return {
      watcher: false,
      loadingwatcher: false,
    };
  },
  components: {
    HomePage,
  },
  mounted() {},
  created() {
    this.getInformation();
  },
  methods: {
    ...mapActions(["getData"]),
    async getInformation() {
      try {
        this.loadingwatcher = true;
        await this.getData();
        this.loadingwatcher = false;
      } catch (e) {
        this.watcher = true;
      }
    },
  },
};
</script>
<style >
@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  src: url("/fontsandicons/fonts/ttf/IRANSansWeb.ttf");
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: IRANSans;
  direction: rtl;
  max-width: 360px;
}
a {
  text-decoration: none;
}
.loading {
  padding: 10px;
  text-align: center;
  background-color: #ffffff;
}
.loadingbutton {
  border: none;
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 48px;
  background-color: rgba(223, 56, 86, 1);
  padding: 15px;
  border-radius: 50px;
  text-align: center;
  margin-top: 220px;
}
h1{
  color: red;
}

</style>