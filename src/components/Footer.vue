<template>
  <footer class="footers">
    <div class="container">
      <div class="footer_wrapper">
        <div class="footer_buy">
          <p>При заказе укажите промокод <i>"theExido"</i> и получите скидку на первый заказ <small>Акция действительна до 15.09</small></p>
          <a href="https://t.me/the_exido">Заказать Фотосьемку</a>
        </div>
        <nav class="navigation">
          <a href="https://goo.gl/maps/4LTxfKTWYwWXokEV7">Житомир</a>
          <router-link to="/about">Владислав Сафронов</router-link>
          <a href="https://www.instagram.com/vlad.safron0v">Инстаграм</a>
          <a href="https://t.me/the_exido">Телеграм</a>
        </nav>
      </div>  
    </div>
  </footer>
</template>

<script>
export default {
  name: "navigation",
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

p, a{
  color: #FFFFFF;
}
small{
  font-size: .5rem;
}

.footers {
  padding: 30px;
  background: #000;
}

.footer_buy{
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.footer_buy > a{
  padding: 10px;
  font-weight: bold;
  opacity: .7;
  text-decoration: underline;
  transition: all .5s ease-in;
}
.footer_buy a:hover {
  opacity: 1;
  transition: all .5s ease-in;
}

.navigation a {
  display: inline-block;
  font-weight: bold;
  padding: 5px 10px;
  color: #FFFFFF;
  opacity: .7;
  transition: all .5s ease-in;
}

.navigation a:hover {
  opacity: 1;
  transition: all .5s ease-in;
}


a.router-link-exact-active {
  opacity: 1;
  transition: all .5s ease-in;
}

nav{
  margin-top: 10px;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.header__wrapper{
  display: flex;
  flex-direction: column;
  -ms-align-items: center;
  align-items: center;
}

.logo{
  max-width: 450px;
  width: 100%;
  margin-bottom: 15px;
}

@media screen and (max-width: 560px) {
    .navigation {
      padding: 10px 0;
    }
    .navigation a {
      padding: 8px 7px;
    }
}

</style>
