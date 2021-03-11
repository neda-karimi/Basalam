<template>
  <div class="back">
    <div class="foodpic">
      <img class="foodimage" :src="product.product.photoUrl" />
      <h3 class="nameofproduct">{{ product.product.name }}</h3>
    </div>
    <div class="price">
      <div class="productprice">
        <del> {{ product.product.primaryPrice }} </del>
        <h3 class="PriceForSale">{{ product.product.price }}</h3>
        <h4 class="currency-unit">
          <span class="currency">توما</span>
          <span class="currency2">ن</span>
        </h4>
      </div>
    </div>

    <div class="icons">
      <button
        id="minus1"
        class="minus"
        @click="productCountDecrement()"
        @mouseup="mouseup()"
        @mousedown="mousedownminus1()"
      >
        <img src="/fontsandicons/icon/minus.png" />
      </button>
      <div id="recnum1" class="recnum">{{ product.quantity }}</div>
      <button
        id="plus1"
        class="plus"
        @mouseup="mouseup"
        @mousedown="mousedownplus1"
    
        @click="productCountIncrement()"
      >
        <img src="/fontsandicons/icon/plus.png" />
      </button>
      <button class="recycle" @click="removeProduct()">
        <img src="/fontsandicons/icon/recycle.png" />
      </button>
      <h1 class="savein">ذخیره در لیست خرید بعدی</h1>
    </div>
    <h4
      v-show="product.quantity == product.product.stock"
      class="warning-outOfStock"
    >
      <span> {{ product.quantity }} </span>
      <span> عدد در انبار موجود است </span>
    </h4>
  </div>
</template>
<script>
import { Getter, mapActions } from "vuex";

export default {
  data(){
    return{
     repeat : 1000,
     counter:String,
     re:0,
    timeout:null ,
    interva:null

    }
  
      
  },
  props: ["product", "vendorId"],
  methods: {
    ...mapActions([
      "productCountIncrementVuex",
      "productCountDecrementVuex",
      "  removeProduct",
    ]),
    productCountIncrement() {
      var vendorId = this.vendorId;
      var productId = this.product.product.id;
      this.$store.dispatch("productCountIncrementVuex", {
        vendorId,
        productId,
      });
    },
    productCountDecrement() {
      var vendorId = this.vendorId;
      var productId = this.product.product.id;
      this.$store.dispatch("productCountDecrementVuex", {
        vendorId,
        productId,
      });
    },
    removeProduct() {
      var vendorId = this.vendorId;
      var productId = this.product.product.id;
      this.$store.dispatch("removeProduct", {
        vendorId,
        productId,
      });
    },
    repeat2(){
      
      this.repeat/=2
      return  this.repeat;
    },

    mousedownplus1: function () {
      this.timeout = setTimeout(() => {
        this.interval = setInterval(() => {
          this.productCountIncrement()
        }, 150);
      }, 300);
    },
    
    mousedownminus1: function () {
      this.timeout = setTimeout(() => {
        this.interval = setInterval(() => {
          this.productCountDecrement()
        }, 150);
      }, 300);
    },
    
    mouseup: function ()  {
      clearTimeout(this.timeout);
      clearInterval(this.interval)
     
    },

  },
};
</script>
<style scoped>
h4 {
  font-size: 12px;
  color: red;
}
.warning-outOfStock {
  padding-right: 10px;
}
.back {
  background-color: #ffffff;
  border-bottom: solid 1px rgba(238, 238, 238, 1);
}
.foodpic {
  font-size: 12px;
  color: rgba(62, 62, 62, 1);
  display: flex;
  justify-content: flex-start;
  padding: 25px 12px 5px;
}
.foodimage {
  width: 82px;
  height: 82px;
  border-radius: 12px;
}
.nameofproduct {
  padding-top: 5px;
  padding-right: 15px;
  font-weight: 200;
}
.price {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
}
.productprice {
  margin-top: -30px;
  margin-left: 15px;
  display: flex;
  font-size: 12px;
}
del {
  color: rgba(157, 157, 157, 1);
}
.PriceForSale {
  color: rgba(83, 83, 83, 1);
  font-size: 12px;
  padding-right: 5px;
}
.currency {
  color: rgba(83, 83, 83, 1);
  padding-right: 5px;
}
.currency2 {
  color: rgba(83, 83, 83, 1);
  position: absolute;
  top: -7px;
  left: 3px;
  font-size: 10px;
}
.icons {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
}
.minus {
  width: 24px;
  height: 24px;
  background-color: rgba(238, 238, 238, 1);
  border-radius: 100px;
  border: none;
  text-align: center;
  color: rgba(83, 83, 83, 1);
  margin-right: 0px;
  padding-bottom: 3px;
}
.plus {
  width: 24px;
  height: 24px;
  background-color: rgba(238, 238, 238, 1);
  border-radius: 100px;
  border: none;
  text-align: center;
  color: rgba(83, 83, 83, 1);
  font-size: 14px;
  margin-right: -100px;
  padding: 3px;
}
.recycle {
  width: 24px;
  height: 24px;
  background-color: rgba(238, 238, 238, 1);
  border-radius: 100px;
  border: none;
  text-align: center;
  margin-right: 15px;
  padding: 3px;
}
.recnum {
  margin: 0 auto;
  width: 24.5px;
  height: 24.5px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 6px;
  border: solid 0.5px #ebe4e4;
  text-align: center;
  color: rgba(83, 83, 83, 1);
  font-size: 14px;
  margin-right: 5px;
  padding: 2px;
}
.savein {
  margin: 0 auto;
  font-size: 10px;
  color: rgba(125, 125, 125, 1);
  font-weight: bold;
  border-bottom: dotted 1px rgba(125, 125, 125, 1);
  margin-left: 0.2rem;
}
.plus:disabled {
  opacity: 0.3;
}
.currency-unit {
  font-weight: 600;
  position: relative;
}
</style>