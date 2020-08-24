<template>
  <div class="home">
  	<div class="container">
  		<h1 class="home-title">Я Влад — мобильный фотограф.<br><span>Предлагаю вам ознакомиться с моими работами.</span></h1>
  		<div class="category__wrapper">
            <singleCategory
            v-for="(category, index) in categories"
            :key="index"
            :category="category"/>
        </div>
  	</div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import singleCategory from "@/components/single-category";

export default {
  name: "Home",
  components: {
    singleCategory
  },
  data() {
			return {
                categories: [
                    {name: 'Портрет', src: 'portrait/01.jpg', link: '/portrait'},
                    {name: 'Природа', src: 'nature/01.jpg', link: '/nature'},
                    {name: 'Архитектура', src: 'architecture/01.jpg', link: '/architecture'},
                ],
			}
		}
};
</script>

<style>
	.category__wrapper{
		display: flex;
		-ms-align-items: center;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.home-title{
		font-size: 2.5rem;
		margin-bottom: 2rem;
		line-height: 0.54;
	}
	.home-title>span{
		font-size: 1.5rem;
	}

	@media screen and (max-width: 1000px) {
    .home-title{
    	margin-top: 1rem;
		line-height: 0.74;
	}
}

	@media screen and (max-width: 560px) {
    .home-title{
    	margin-top: 1rem;
		line-height: 0.75;
	}
}
</style>
