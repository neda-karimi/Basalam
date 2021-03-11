<template>
  <div class="green-Message">
    <div class="message-offer">
      <span> هورا! ارسال از این غرفه برای شما </span>
      <h4>رایگان شد.</h4>
    </div>
    <div class="savecode">
      <img class="savecodeimg" src="/fontsandicons/icon/salecode.png" />ثبت کد
      تخفیف غرفه
    </div>
  </div>
</template>

<style lang="css" scoped>
.message-offer {
  display: flex;
  align-items: flex-start;
  font-size: 12px;
  width: 100%;
  padding-right: 5px;
  padding: 5px;
  color: rgba(0, 120, 108, 1);
  background-color: rgba(223, 245, 241, 1);
  border-radius: 2px;
}

.green-Message {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 15px;
  border-radius: 2px;
  background-color: #ffffff;
}

.savecode {
  width: 125px;
  font-size: 10px;
  padding: 7px;
  color: rgba(62, 62, 62, 1);
  background-color: rgba(238, 238, 238, 1);
  border-radius: 100px;
  margin-top: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
}
  .savecodeimg{
     width: 15px;
     height: 10.5px;
     text-align: center;
     
   } 
</style>