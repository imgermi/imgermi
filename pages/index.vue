<template>
	<main>
	  <section class="hero">
	    <div class="container">
	      <h1 class="hero__title">Hello, I'm Juan Martín Germano</h1>
	      <h2 class="hero__sub"> A <nuxt-link to="/">person</nuxt-link> that <nuxt-link to="/">works</nuxt-link> as a designer, <nuxt-link to="/">writes</nuxt-link> articles as a 9 year old kid, and tries to <nuxt-link to="/">read</nuxt-link> a lot to get better every day.</h2>
	      <a class="hero__link" href="mailto:juanmartingermano@gmail.com">juanmartingermano@gmail.com</a>
	    </div>
	  </section>
	  <section class="band fucer left">
	  	<div class="container">
				<div class="band__text">
					<h4 class="band__text--intro">Some Work</h4>
					<h3 class="band__text--title">Fucer App</h3>
					<p class="band__text--p">A big project I did with a team of 3 total, from product strategy all the way to web and mobile app.</p>
					<nuxt-link to="/work" class="btn">View Project</nuxt-link>
				</div>
	  		<div class="band__img">
	  			<img src="~/assets/images/fucer/pixel.png" class="pixel" alt="">
	  			<img src="~/assets/images/fucer/favoritas.png" class="screen" alt="">
	  			<img src="~/assets/images/fucer/paso-2.png" class="screen" alt="">
	  			<img src="~/assets/images/fucer/screens.png" class="screens" alt="">
	  		</div>
	  	</div>
	  </section>
  </main>
</template>
