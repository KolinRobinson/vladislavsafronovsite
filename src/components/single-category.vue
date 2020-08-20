<template>
    <router-link class="single-category" :to="category.link">
      <img :src="require(`../assets/img/` + category.src)" alt="">
      <h2 class="single-category-text">{{category.name}}</h2>
    </router-link>
</template>

<script>
export default {
  name: "single-category",
  props: {
      category: {
        type: Object,
        default(){
          return {}
                }
            }
        },
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


.single-category{
  position: relative;
  display: flex;
  flex: 1 1 250px;
  margin: 5px;
  z-index: 0;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
}

.single-category:after{
  content: '';
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, .5);
}

.single-category-text{
  color: #FFFFFF;
  position: absolute;
  z-index: 3;
  transition: all .5s ease-in;
  display: inline-block;
  border-bottom: 0px solid rgba(255, 255, 255, 0);
}

.single-category-text:hover{
  border-bottom: 1px solid rgba(255, 255, 255, 1);
  transition: all .5s ease-in;
}
</style>
