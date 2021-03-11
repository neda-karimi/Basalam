<template>
      <div class="container2">

        <router-link :to="'/'"><button class="backIcon"><img src="/fontsandicons/icon/backicon.png"></button>
        </router-link>
        <div class="backcontainer">
            آدرس ارسال
        </div>

        <button class="NewAddressbutton"><img class="NewAddressIcon" src="/fontsandicons/icon/plus.png">آدرس
            جدید</button>

    </div>
</template>



<style lang="css" scoped>

*{
    font-family: IRANSans;
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    max-width: 360px;
}






 .container2{
        display: flex;
        justify-content: center;
        max-width: 360px;
        margin: 0 auto;
       background-color: #FFFFFF;
        direction: rtl;
        font-family: 'IRANsans';
        width: 360px;
        padding: 10px 16px 16px;
        align-items: center;

     }
     .backIcon{
         width: 40px;
         height: 40px;
         border:  #9D9D9D;
         border-radius: 50%;
         text-align: center;
         padding:15px;
         background: #EEEEEE;; 
     }
     .backcontainer{
         display: flex;
        text-align: center;
        justify-content: space-around;
      width: 150px;
       margin-right: -10px;
       padding-right: 13px;
       font-size: 16px;
       color: rgba(62, 62, 62, 1);
      
     }
     .NewAddressbutton{
        background: #FFFFFF;
        font-size: 12px;
         width: 150px;
         height: 35px;
         border: 1px solid #9D9D9D;
         border-radius: 100px;
        text-align: center;
        margin-right: 100px;
        font-weight: 600;
        color: rgba(62, 62, 62, 1);
        position: relative;
        padding-right: 23px;
     
        
     }
     .NewAddressIcon{
       position: absolute;
       left:70px;
       top: 10px;
     }

</style>