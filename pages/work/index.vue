<template>
  <main>
	  <section class="hero">
	    <div class="container">
	      <h1 class="hero__title">Work</h1>
	      <h2 class="hero__sub">A featured project on a case study, and a few pieces from <a href="https://dribbble.com/imgermi" target="_blank"> my Dribbble profile</a>.</h2>
	    </div>
	  </section>
	  <section class="band fucer left">
	  	<div class="container">
				<div class="band__text">
					<h4 class="band__text--intro">Featured Work</h4>
					<h3 class="band__text--title">Fucer App</h3>
					<p class="band__text--p">A big project I did with a team of 3 total, from product strategy all the way to web and mobile app.</p>
					<nuxt-link to="/work/fucer-app" class="btn">View Project</nuxt-link>
				</div>
	  		<div class="band__img">
	  			<img src="~/assets/images/fucer/pixel.png" class="pixel" alt="Google Pixel phone frame - Case Study">
	  			<img src="~/assets/images/fucer/favoritas.png" class="screen" alt="Google Pixel phone frame - Case Study">
	  			<img src="~/assets/images/fucer/paso-2.png" class="screen" alt="Google Pixel phone frame - Case Study">
	  			<img src="~/assets/images/fucer/screens.png" class="screens" alt="Google Pixel phone frame - Case Study">
	  		</div>
	  	</div>
	  </section>
    <section class="work-list">
      <div class="container">
        <a href="https://dribbble.com/shots/5104123-Vendexa-launched-Online-store" target="_blank" class="work-link">
          <img src="~/assets/images/dribbble/vendexa.jpg" alt="">
          <h4 class="band__text--intro">Online Store</h4>
					<h3 class="band__text--title">Vendexa</h3>
        </a>
        <a href="https://dribbble.com/shots/5087734-Diphot-Home-Page" target="_blank" class="work-link">
          <img src="~/assets/images/dribbble/diphot.jpg" alt="">
          <h4 class="band__text--intro">Company website</h4>
					<h3 class="band__text--title">Diphot</h3>
        </a>     
        <a href="https://dribbble.com/shots/4927239-Online-course-landing-page" target="_blank" class="work-link">
          <img src="~/assets/images/dribbble/standupweb.jpg" alt="">
          <h4 class="band__text--intro">Online Course</h4>
					<h3 class="band__text--title">StandUpWeb</h3>
        </a>   
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Work'
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'A featured project on a case study, and a few pieces from my Dribbble profile. I\'m a Product designer based in Buenos Aires.' }
        ]
      }
    }
  }
</script>