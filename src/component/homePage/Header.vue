<template>
  <div class="container">
    <div class="header">
      <div class="topheader">
        <div class="logo">
          <img src="/fontsandicons/icon/Logo.png" alt="" />
          <img class="textlogo" src="/fontsandicons/icon/Type.png" alt="" />
          <img class="vec1" src="/fontsandicons/icon/Vector1.png" alt="" />
        </div>
        <a href="#" class="saleInBSLM"> فروش در باسلام </a>
        <div class="basket">
          <img src="/fontsandicons/icon/Vector2.png" alt="" />

          <div class="numOfProducts">۳</div>
        </div>
      </div>

      <form class="search">
        <input
          class="searchinput"
          placeholder=" جستجو در صد ها هزار محصول خانگی و محلی..."
        />
        <div class="vec3">
          <img src="/fontsandicons/icon/searchbox.png" alt="" />
        </div>
      </form>
    </div>
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

.container {
  display: flex;
  flex-direction: row;
  max-width: 360px;
  margin: 0 auto;
  background-color: rgba(223, 223, 223, 1);
  direction: rtl;
  font-family: "IRANsans";
  width: 360px;
  border-bottom: solid 6px #e5e5e5;
}
.header {
  width: 100%;
  height: 101px;
  background-color: #ffffff;
}
.topheader {
  display: flex;
  padding: 7px 10px;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
}
.textlogo {
  margin-right: 0.2rem;
}
.vec1 {
  margin-right: 0.2rem;
  padding: 0.4rem;
}
.numOfProducts {
  border-radius: 100px;
  background-color: rgba(223, 56, 86, 1);
  top: -5px;
  line-height: 1;
  padding: 4px 6px;
  text-align: center;
  position: absolute;
  left: -8px;
  color: #ffffff;
  font-size: 0.5rem;
}
.search :hover {
  color: rgba(223, 56, 86, 1);
}
.searchinput {
  font-family: "IRANsans";
  font-size: 12px;
  height: 40px;
  width: 328px;
  color: rgba(125, 125, 125, 1);
  margin: 10px 16px 11px 16px;
  border: 1px solid#9D9D9D;
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 5px;
}
.saleInBSLM {
  margin-right: auto;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  background-color: rgba(62, 62, 62, 1);
  border-radius: 50px;
  font-size: 0.8rem;
  padding: 5px 10px;
}
.basket {
  position: relative;
  margin-right: 0.5rem;
}
.vec3 {
  display: flex;
  position: absolute;
  right: 310px;
}
.search {
  display: flex;
  align-items: center;
}
</style>


<script>
export default {};
</script>