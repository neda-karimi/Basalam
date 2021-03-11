<template>
  <div class="saveandprice">
      <div class="Continues">ادامه خرید فقط از این غرفه</div>
    <div class="twoproducts">
      <div>
     
      <h4 class="totalprice">{{ totalprice }}</h4>
       <h4 class="currency-unit">
          <span class="currency">توما</span>
          <span class="currency2">ن</span>
        </h4>
      </div>
      <span> جمع مبلغ برای {{ number }} کالا </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["totalprice", "number"],
};
</script>
<style scoped>
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
.saveandprice {
  display: flex;
  padding: 10px;
  width: 360px;
  background-color: #ffffff;
  border-bottom: solid 3px gainsboro;
}
.twoproducts div{
  display: flex;
   position: relative;
   padding-right: 25px;
}
.twoproducts h4 {
 
  font-weight: 700;
  font-size: 12px;
  margin-right: 2px;
}
.charspan {
  position: absolute;
   bottom:10px;
   right:86px;
}
.Continues {
  width: 170px;
  background-color: rgba(223, 56, 86, 1);
  border-radius: 100px;
  text-align: center;
  padding: 8px;
  color: rgba(250, 250, 250, 1);
  font-size: 12px;
}
.twoproducts {
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  font-size: 12px;
  padding-right: 15px;
  color: rgba(83, 83, 83, 1);
  margin-right: 50px;
}
.totalprice{
  
}
</style>
