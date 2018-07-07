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
					<h4 class="band__text--intro">Work</h4>
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
    <section class="band about right">
    	<div class="container">
    		<div class="band__img">
    			<img src="~/assets/images/imgermi.jpg" alt="" class="about__pic--home">
    		</div>
    		<div class="band__text">
    			<h4 class="band__text--intro">Some info</h4>
    			<h3 class="band__text--title">I'm a person</h3>
    			<p class="band__text--p">My days are all about trying to come up with a solution that's not only usable but also strategically good and aligned with the business that needs to solve a problem. From content and words, all the way to visuals and overall experience</p>
    			<nuxt-link to="/work" class="btn">About me</nuxt-link>
    		</div>
    	</div>
    </section>
    <section class="band notes left">
    	<div class="container">
  			<div class="band__text">
  				<h4 class="band__text--intro">Some notes</h4>
  				<h3 class="band__text--title">Writing as a 9 year old</h3>
  				<p class="band__text--p">Actually I try to do so, but it's damn difficult.</p>
  				<p class="band__text--p">You see, kids have this beautiful imagination that leads to an incredibly creative life. Do you remember closing your eyes, coming up with some sort of story or game in your head, open your eyes and suddenly start living that story or game in real life? That's imagination leading to creativity. That's coming up with something from nothing.</p>
  				<nuxt-link to="/work" class="btn">View All</nuxt-link>
  			</div>
    		<div class="band__img">
    			<a class="post" href="">
    				<h6 class="post__title">Learning by doing: acquiring skills when the situation demands it</h6>
    				<small class="post__date">Mar 29 - 4 min read</small>
    			</a>
    			<a class="post" href="">
    				<h6 class="post__title">Let the tools go: time to start focusing on solutions</h6>
    				<small class="post__date">Apr 04 - 4 min read</small>
    			</a>
    		</div>
    	</div>
    </section>
    <section class="band books right">
    	<div class="container">
    		<div class="band__img">
    			<img src="~/assets/images/book-covers.png" alt="">
    		</div>
    		<div class="band__text">
    			<h4 class="band__text--intro">Some books</h4>
    			<h3 class="band__text--title">Designer's learning path</h3>
    			<p class="band__text--p">Despite the fact that I consider practicing and doing one of the best learning ways, reading is something unbeateble. The ammount of content and information you can absorb from good books is infinite. That's why I wanted to document my reading and learning journey.</p>
    			<nuxt-link to="/work" class="btn">View more</nuxt-link>
    		</div>
    	</div>
    </section>
  </main>
</template>
