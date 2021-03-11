<template>
  <div class="lists">
    <div class="cart">سبد خرید</div>
    <div class="nextcart">لیست خرید بعدی</div>
  </div>
</template>
<script>
</script>
<style lang="css" scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.lists {
  display: flex;
  align-items: flex-start;
  text-align: center;
  font-size: 14px;
  width: 100%;
  background-color: #ffffff;
}

.cart {
  width: 180px;
  height: 40px;
  border-bottom: solid 2px rgba(223, 56, 86, 1);
  font-weight: 700;
  padding: 0.2rem;
  padding-top: 0.5rem;
  color: rgba(223, 56, 86, 1);
  background-color: #ffffff;
}
.nextcart {
  width: 180px;
  height: 40px;
  padding: 0.2rem;
  padding-top: 0.5rem;
  border-bottom: solid 2px rgba(223, 223, 223, 1);
  background-color: #ffffff;
}
</style>
