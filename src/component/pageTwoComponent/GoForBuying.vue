<template>
     <div class="GoForBuying">
         <router-link :to="'/ThirdPage'"> <div class="Continues">ادامه فرآیند خرید</div>
         </router-link>
              <div class="paymentprice"> مبلغ قابل پرداخت  
            <span class="price">{{itemsOfVendor}} <span class="Nchar">ن</span>توما</span>
           
        </div>
    </div>

</template>
<script>
export default {
  props: ["countVendor","itemsOfVendor",],
}
</script>
<style lang="css" scoped>
.Continues{
  width: 180px;
  background-color: rgba(223, 56, 86, 1);
  border-radius: 100px;
  text-align: center;
  padding: 10px;
  color:rgba(250, 250, 250, 1);
  font-size: 12px;
  font-family: IRANSans;
}

.GoForBuying{
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 30px;
  padding: 10px;
  direction: rtl;
}
.paymentprice{
 width: 120px;
 margin-right: 40px;
 font-size: 12px;
 font-weight: 400;
 direction: ltr;
 color: rgba(83, 83, 83, 1);
 padding: 5px;
}
.price{
  font-weight: bold;
  position: relative;
  margin-top: 3px;
}
.Nchar{
  position: absolute;
  top: -10px;
  left: 2.5px;
}
</style>