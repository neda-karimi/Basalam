<template>
     <div class="back">
    <div class="foodpic">
      <img class="foodimage" :src=" product.product.photoUrl" />
      <div class="container-info-product">
        <h3 class="nameofproduct">{{ product.product.name }}</h3>
        <div class="quantityofnumber">{{product.quantity}}عدد </div>
      </div>
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
     </div>
</template>
<script>
export default {
      props: ["product", "vendorId"],
}
</script>
<style scoped>
.back {
  background-color: #ffffff;
  border-bottom: solid 1px rgba(238, 238, 238, 1);
  padding-bottom: 10px;
  padding-top: 10px;
}
.foodpic {
  font-size: 12px;
  color: rgba(62, 62, 62, 1);
  display: flex;
  justify-content: flex-start;
  padding: 5px 12px 5px;
  position: relative;
}
.foodimage {
  width: 82px;
  height: 82px;
  border-radius: 12px;
}
.nameofproduct {
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
.currency-unit {
  font-weight: 600;
  position: relative;
}
.container-info-product{
  display: flex;
  flex-direction: column;
  padding-right: 15px;
}
</style>