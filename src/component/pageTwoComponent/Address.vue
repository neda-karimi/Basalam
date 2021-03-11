<template>
<div>
    <div class="contain3">
        <div class="sendToSomeOne">
            به:  {{ Address.name  }}
        </div>
        <div class="EditIcon"> <img src="/fontsandicons/icon/editIcon.png"> </div>
    </div>
    <div class="contain4">
        قم,پردیسان,خیابان دانشگاه,بعد از میدان علوم
        <br>
        رو به روی پایانه, ساختمان شرکت توسعه و
        <br>
        تدبیر جوامع باسلام
    </div>

    <label class="radiobtn2">
        <input type="radio" checked="checked" name="radio">
        <span class="checkmark"></span>
    </label>
</div>

</template>
<script>
export default {
  props:["Address"]
}
</script>
<style lang="css" scoped>



 .sendToSomeOne{
     font-size: 14px;
     margin-right: 35px;
     padding:15px;
     color: rgba(62, 62, 62, 1);

 }
.EditIcon{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(238, 238, 238, 1);
    text-align: center;
    padding: 5px;
    margin-left: 15px;
   
    
}
.contain3{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
     background-color: #FFFFFF;
     direction: ltr;
    
}
.contain4{
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
   direction: rtl;
   padding-bottom: 10px;
   padding-left: 60px;
    color: rgba(83, 83, 83, 1);
    width: 360px;
    margin: 0 auto;
    border-bottom: solid 1px rgba(238, 238, 238, 1);
     }
      .radiobtn2 {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 5px;
    cursor: pointer;
    font-size:10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .radiobtn2 input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    padding: 5px;
  }
  .checkmark {
    position: absolute;
   right: 15px;
   top: -76px;
    height: 20px;
    width: 20px;
    border: solid 2px rgba(157, 157, 157, 1);
    border-radius: 50%;
  }
  
  .radiobtn2 input:checked ~ .checkmark {
    background-color: rgba(223, 56, 86, 1);
       border: solid 2px rgba(223, 56, 86, 1);
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .radiobtn2 input:checked ~ .checkmark:after {
    display: block;
  }
  .radiobtn2 .checkmark:after {
    top: 5px;
   left: 5px;
   width: 8px;
   height: 8px;
   border-radius: 50%;
   background: white;
  
 }
</style>