<template>
  <section class="portrait">
  	<div class="container">
	    <Photoswipe rotate>
	    	<img v-for="index in imageSrc"
	    		:key=index
		        :src="require(`../assets/img/` + index)"
		        v-pswp="require(`../assets/img/` + index)"
		        class="portrait-img" 
	    	/>
		</Photoswipe>
  	</div>
  </section>
</template>

<script>

export default {
  name: "Portrait",
  data() {
			return {
				imageSrc: [
					'portrait/01.jpg',
					'portrait/02.jpg',
					'portrait/03.jpg'
				]
            }
        }
};
</script>

<style scoped>
	.portrait{
		margin-top: calc(15px + 3vw);
	}
	.pswipe-gallery{
		display: flex;
		flex-direction: column;
		-ms-align-items: flex-start;
		align-items: flex-start;
	}

	.portrait-img{
		max-width: 48vw;
		width: 100%;
		object-fit: contain;
		margin-bottom: 1px;
	}
	.portrait-img:nth-child(2n){
		margin-left: auto;
	}
	.portrait-img + .portrait-img{
		margin-top: -25vw;
	}

	.portrait-img:hover{
		z-index: 10;
	}
</style>