<template>
  <div class="PaymentContainer">
    <router-link :to="'/SecondPage'">
    <button class="backIcon">
      <img src="/fontsandicons/icon/backicon.png" />
    </button>
    </router-link>
    <div class="backcontainer">پرداخت</div>
   
  </div>
</template>

<style lang="css" scoped>
* {
  font-family: IRANSans;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  max-width: 360px;
}
.PaymentContainer {
  display: flex;
  max-width: 360px;
  margin: 0 auto;
  background-color: #ffffff;
  direction: rtl;
  font-family: "IRANsans";
  width: 360px;
  padding: 10px 16px 16px;
}
.backIcon {
  width: 40px;
  height: 40px;
  border: #9d9d9d;
  border-radius: 50%;
  text-align: center;
  padding: 15px;
  background: #eeeeee;
}
.backcontainer {
  display: flex;
  width: 150px;
  padding-right: 10px;
  padding-top: 6px;
  font-size: 16px;
  color: rgba(62, 62, 62, 1);
}
</style>