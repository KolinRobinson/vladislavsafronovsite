<template>
  <section class="architecture">
  	<div class="container">
	    <Photoswipe rotate>
	    	<img v-for="index in imageSrc"
	    		:key=index
		        :src="require(`../assets/img/` + index)"
		        v-pswp="require(`../assets/img/` + index)"
		        class="architecture-img" 
	    	/>
		</Photoswipe>
  	</div>
  </section>
</template>

<script>

export default {
  name: "Architecture",
  data() {
			return {
				imageSrc: [
					'architecture/01.jpg'
				]
            }
        }
};
</script>

<style scoped>
.architecture{
	margin-top: calc(15px + 3vw);
}
.pswipe-gallery{
	display: flex;
	flex-direction: column;
	-ms-align-items: flex-start;
	align-items: flex-start;
}

.architecture-img{
	max-width: 55vw;
	width: 100%;
	object-fit: contain;
	margin-bottom: 1px;
}
.architecture-img:nth-child(2n){
	margin-left: 45vw;
}
.architecture-img + .architecture-img{
	margin-top: -34vw;
}

.architecture-img:hover{
	z-index: 10;
}
</style>
