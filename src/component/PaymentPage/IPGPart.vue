<template>
  <div>
    <div class="payContainer">
      <div class="chooseBank">انتخاب درگاه پرداخت</div>
      <div class="namesOfBanks">
        <div class="selectBank">
          <label class="radiobtn2">
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <span class="bankName">بانک سامان</span>
        </div>
        <div class="selectBank">
          <label class="radiobtn2">
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <span class="bankName">بانک پاسارگارد</span>
        </div>
        <div class="selectBank">
          <label class="radiobtn2">
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <span class="bankName">آسان پرداخت</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.radiobtn2 {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 10px;
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
  height: 20px;
  width: 20px;
  border: solid 2px rgba(157, 157, 157, 1);
  border-radius: 50%;
  right: 10px;
  margin-top: 5px;
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
  top: 3px;
  left: 3.1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: white;
}
.chooseBank {
  padding: 10px 16px;
  color: rgba(62, 62, 62, 1);
}
.selectBank {
  font-size: 14px;
  color: rgba(62, 62, 62, 1);
  position: relative;
  width: 180px;
  text-align: right;
}
.namesOfBanks {
  display: flex;
  flex-wrap: wrap;
}
.bankName {
  margin-right: 35px;
}
.payContainer {
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 15px;
   background-color: #FFFFFF;
}
</style>