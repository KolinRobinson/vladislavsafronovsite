<template>
  <header class="navigation">
    <div class="container">
      <div class="header__wrapper">
        <div class="logo">
          <img src="../assets/img/logo.png" alt="">
        </div>
        <nav>
          <router-link to="/">Главная</router-link>
          <router-link to="/portrait">Портрет</router-link>
          <router-link to="/nature">Природа</router-link>
          <router-link to="/architecture">Архитектура</router-link>
          <router-link to="/about">Обо мне</router-link>
        </nav>
      </div>
    </div>
    
  </header>
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


.navigation {
  padding: 30px;
}
@media screen and (max-width: 560px) {
    .navigation {
      padding: 10px 0;
    }
}

.navigation a {
  display: inline-block;
  font-weight: bold;
  color: black;
  padding: 5px 10px;
  transform: rotate(0deg) translateY(0px);
  transition: all .5s ease-in;
}

.navigation a:hover {
  font-size: 1.2rem;
  transition: all .5s ease-in;
}


a.router-link-exact-active {
  transform: rotate(15deg) translateY(10px) !important;
  transition: all .5s ease-in;
}

a.router-link-exact-active:nth-child(2n) {
  transform: rotate(-15deg) translateY(-10px) !important;
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
