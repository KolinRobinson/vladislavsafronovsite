<template>
  <section class="about">
  	<div class="container">
  		<div class="about__wrapper">
  			<h1 class="about__title">Привет, познакомимся?</h1>
  			<div class="about__content">
  				<div class="about__img">
  					<img src="../assets/img/about.jpg" alt="Владислав Сафронов - Мобильный Фотограф">
  				</div>
  				<div class="about__info">
  					<p>Привет! Я Влад — мобильный фотограф в городе Житомир.</p>
  					<p>Мобильная фотография в 2020 году — это больше чем селфи либо любительские снимки, это Современное Искусство.
Наш объектив всегда под рукой, он не создает барьер с вами и не внушает страх. Цветопередача телефона создает некий колорит и делает снимки более домашними и тёплыми.
Ни один прекрасный момент не будет упущен телефоном.</p>
  					<p>Сейчас работы мобильных фотографов попадают на обложку журнала Time. Многие западные компании заказывают у агентств именно мобильные фотографии.</p>
  					<p>Попробовав однажды вы влюбитесь в мобильную фотографию навсегда.</p>
  					<a href="https://t.me/the_exido">Заказать Фотосьемку</a>
  				</div>
  			</div>
  		</div>
  	</div>
    
  </section>
</template>

<script>
export default {
  name: "About",
  components: {
  },
  data() {
			return {
               
			}
		}
};
</script>

<style>
	.about{
		padding: 1rem 0;
	}

	.about__content{
		display: flex;
		-ms-align-items: center;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.about__title{
		font-size: 2.5rem;
		margin-bottom: 2rem;
		line-height: 0.54;
	}
	.about__img{
		display: flex;
		flex: 0 1 40vw;
	}
	.about__info{
		display: flex;
		flex: 0 1 525px;
		flex-direction: column;
	}
	.about__info > p{
		margin-top: 1rem;
		font-weight: 300;
	}

	.about__info > a{
	  padding: 10px;
	  font-weight: bold;
	  opacity: .7;
	  text-decoration: underline;
	  transition: all .5s ease-in;
	}
	.about__info a:hover {
	  opacity: 1;
	  transition: all .5s ease-in;
	}

	@media screen and (max-width: 560px) {
    .about__img{
    	flex: 1 1;
	}
	.about__title{
		font-size: 2rem;
		line-height: .7;
	}
}

</style>
