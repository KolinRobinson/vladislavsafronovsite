<template>
  <section class="nature">
  	<div class="container">
	    <Photoswipe rotate>
	    	<img v-for="index in imageSrc"
	    		:key=index
		        :src="require(`../assets/img/` + index)"
		        v-pswp="require(`../assets/img/` + index)"
		        class="nature-img" 
	    	/>
		</Photoswipe>
  	</div>
  </section>
</template>

<script>

export default {
  name: "Nature",
  data() {
			return {
				imageSrc: [
					'nature/01.jpg',
					'nature/02.jpg',
					'nature/03.jpg',
					'nature/04.jpg',
					'nature/05.jpg',
					'nature/06.jpg',
					'nature/07.jpg'
				]
            }
        }
};
</script>

<style scoped>
.nature{
	margin-top: calc(15px + 3vw);
}
.pswipe-gallery{
	display: flex;
	flex-direction: column;
	-ms-align-items: flex-start;
	align-items: flex-start;
	justify-content: center;
}

.nature-img{
	max-width: 55vw;
	width: 100%;
	object-fit: contain;
	margin-bottom: 1px;
}
.nature-img:nth-child(2n){
	margin-left: auto;
}
.nature-img + .nature-img{
	margin-top: -15vw;
}

.nature-img:hover{
	z-index: 10;
}
</style>
