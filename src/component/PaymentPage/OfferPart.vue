<template>
<div class="OfferPart">
      <div class="container3">
        اگر کد تخفیف دارید وارد کنید
    </div>
    <div class="container4">
        <form>
            <input class="inputOfOff" placeholder="کد تخفیف">
        </form>
        <div class="submit">تایید</div>
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
        <div class="useCredit"> استفاده از اعتبار</div>

    </div>
</div>
</template>
<style scoped>

.OfferPart{
  background-color: #FFFFFF;
}
 .container3{

       padding-right: 16px;
       color: rgba(62, 62, 62, 1);
       font-size: 14px;
       padding-top: 10px;
     }
     .container4{
      padding-right: 16px;
      padding-top: 5px;
     padding-left:16px ;
     padding-bottom: 30px;
     position: relative;
     border-bottom: 1px solid #EEEEEE; 
     direction: ltr;
     }
     .inputOfOff{
       border-radius: 8px;
       width: 100%;
       padding: 7px;
       direction: rtl;
       border: solid 1px rgba(125, 125, 125, 1);
      
      
     }
     .submit{
       width: 68px;
       height: 30px;
       border-radius: 100px;
       background-color: #EEEEEE;
       text-align: center;
       color: rgba(62, 62, 62, 1);
       font-size: 14px;
       padding: 4px;
       position: absolute;
       top: 7.5px;
       margin-left: 3px;
       margin-top: 1px;
       direction: ltr;
     }
  .switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 28px;
  margin-left: 280px;
  margin-top: 20px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24.5px;
  width: 24.5px;
  left: 0px;
  bottom: 1px;
  border: solid .5px gray;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: rgba(223, 56, 86, 1);
}


input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(18px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.useCredit{
  margin-left: 185px;
  margin-top: -23px;
  font-size: 14px;
  color: rgba(62, 62, 62, 1);
  padding-right: 60px;
  width: 150px;
}     
</style>