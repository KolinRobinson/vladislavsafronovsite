<template>
  <header class="navigation">
    <div class="container">
      <div class="header__wrapper">
        <div class="logo">
          <img src="../assets/img/logo.png" alt="">
        </div>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/portrait">Portrait</router-link>
          <router-link to="/nature">Nature</router-link>
          <router-link to="/architecture">Architecture</router-link>
          <router-link to="/about">About</router-link>
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

.navigation a {
  display: inline-block;
  font-weight: bold;
  color: black;
  padding: 5px 10px;
  transform: rotate(0deg) translateY(0px);
  transition: all .5s ease-in;

}

a.router-link-exact-active {
  transform: rotate(15deg) translateY(10px) !important;
  transition: all .5s ease-in;
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
</style>
