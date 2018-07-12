<template>
	<main>
		<section class="hero project">
		  <div class="container">
		    <h1 class="hero__title">Fucer App</h1>
		    <h2 class="hero__sub">Mobile & web app for an Argentinian organisation</h2>
		    <ul class="project__tasks">
		    	<li>Product Strategy</li>
		    	<li>UX Design</li>
		    	<li>Product Launch</li>
		    	<li>Coding Interfaces</li>
		    </ul>
		    <img src="~/assets/images/fucer/fucer-project-hero.png" alt="Fucer App - Sign Up Screens">
		  </div>
		</section>
		<section class="band project">
			<div class="project__container container">
				<article class="project__block">
					<h3 class="band__text--title">Project intro</h3>
					<p>Fucer is an Argentinian organisation focused on providing online tools and courses for people involved in the law field. After doing a few projects for them, they came up with the idea of building a tool in which public content could be easily accesible for those who need it daily.</p>
					<p>After coming up with the main potential solutions, the final decision was building a simple mobile app where users could look for all the public documentation, find it easily and make a list of favorite documents to check later.</p>
				</article>
				<article class="project__block">
					<h3 class="band__text--title">Approach</h3>
					<p>Made in conjuction with Alex Aboy as <a href="https://weland.com.ar" target="_blank">Weland Agency</a> and Andy Damesón being in charge of back end development, we managed to print Fucer's main ideas into a product strategy that sucesfully met the founders thoughts and expectations.</p>
					<p>The process was mainly based on finding the main needs that potential users would have and aligning them with the business model that the organisation has. Basically the call was 'we need to make a subscription based app where people would pay a few coins a month to access loads of information that can't be found anywhere like this'.</p>
				</article>
			</div>
			<div class="container">
				<article class="project__block">
					<img src="~/assets/images/fucer/fucer-project-wireframes.png" alt="Fucer App - Wireframes">
					<small class="project__caption">First batch of wireframes for the app</small>
				</article>
			</div>
			<div class="project__container container">
				<article class="project__block">
					<h3 class="band__text--title">Challenges & Problems</h3>
					<p>At first, like every other work, the project seemed simple and straightforward. Since a traditional process was used (brainstorming, asking questions, prototyping, testing and iterating), and on the road we found a lot of things we never even thought would exist, the overall work took a lot of time. Expected to last only from 2 to 3 months, we faced many challenges that were born across the process.</p>
					<p>Fucer's initial idea was to offer a free, non card required, plan, where people could access to certain limited content, forever. If a user wanted the app's full features, then a subscription plan was the option.</p>
					<p>After designing the screens (which were presented simply as a prototype via email, never tested in conjunction with the client) for that flow and then developing the whole thing, the client, while testing it with us on a meeting, came up with the conclusion that we should follow Netflix's approach: we give you a 30 day trial, but a card is required.</p>
					<p>Despite the fact that this sounds simple, it changed the hole game, not just design wise, specially development wise. Basically the whole sign up process done was thrown away.</p>
				</article>
			</div>
			<div class="container">
				<article class="project__block">
					<img src="~/assets/images/fucer/fucer-project-original-flow.png" alt="Fucer App - Original Flow">
					<small class="project__caption">Original flow. Open the app > Create an account > Verify your email > Start your unlimited trial (on every screen, a blue sign on the top of the app would remind you about the premium version).</small>
				</article>
			</div>
			<div class="project__container container">
				<article class="project__block">
					<h3 class="band__text--title">The final solution</h3>
					<p>After that 'small' issue we had, which delayed the project for months, learning from our mistakes, we made things all over again. This time, understanding that we weren't asking enough questions and presenting enough work in progress to the client, we priorited the sign up flow.</p>
					<p>Before touching any single line of code, I made a quick Zoom call with the client and presented this 8 screens, straightly as a Figma prototype, going screen by screen. Again, some changes emerged, but in a very positive way. The prototype was perfect for debating the flow and coming up with ideas and solutions as a group. After that 20 minute call (yay, fast!), things were very clear.</p>
				</article>
			</div>
			<div class="container">
				<article class="project__block">
					<img src="~/assets/images/fucer/fucer-project-final-flow.png" alt="Fucer App - Final Flow">
					<small class="project__caption">The final sign up flow, inspired a lot by Netflix's own sign up process. Before creating your account, you are mentioned that the product is a subscription based one. Before putting your credit card, you are also told that you won't be charged until the trial period ends.</small>
				</article>
			</div>
			<div class="project__container container">
				<article class="project__block">
					<h3 class="band__text--title">Work in progress</h3>
					<p>The project isn't over yet, I'm finishing the desktop design for the web version, and in conjunction with the team, development and marketing for the launching are still in progress, about to be finished. These results will be up on the site as soon as they are over.</p>
				</article>
			</div>
			<div class="container">
				<article class="project__block">
					<img src="~/assets/images/fucer/fucer-project-final-screens.png" alt="Fucer App - Final Screens">
					<small class="project__caption">These are screenshots taken straight from Google Developer Tools, out of the current proyect in development mode.</small>
				</article>
			</div>
			<div class="project__container container">
				<article class="project__block">
					<h3 class="band__text--title">Things I learned</h3>
					<p>In addition to working on a whole mobile app which forced me to get better at UX Design, the project taught me a lot about product strategy and client communication in general. One of the main things that I'm thankful for, is realising that this 6-month-approach can't happen anymore (despite the fact that every other project I made, was done exactly like this). That's exactly why I'm constanly working on <nuxt-link to="path">the Designer's Path</nuxt-link>, reading books like 'Sprint' and 'Hacking Growth' and trying to incorporate every approach I can on my daily work.</p>
				</article>
				<span class="project__disclaimer">You can check out other projects I've done on <a href="https://behance.net/imgermi" target="_blank">my Behance page</a>.</span>
			</div>
		</section>
	</main>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Fucer App'
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: '' }
        ]
      }
    }
  }
</script>