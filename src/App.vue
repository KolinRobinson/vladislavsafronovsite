<template>
  <div id="app">
    <navigation/>
    <transition name="slide-fade">
      <router-view />
    </transition>  
    <footers />
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from "@/components/Navigation.vue";
import footers from "@/components/Footer.vue";

export default {
  components: {
    navigation,
    footers
  }
};
</script>

<style>
@import './assets/style/reset.css';
@import './assets/style/style.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}


</style>
