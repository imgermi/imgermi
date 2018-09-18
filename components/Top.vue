<template>
	<header>
		<div class="container">
			<nuxt-link class="logo" to="/">imgermi.com</nuxt-link>
			<nav>
				<button class="hamburger hamburger--boring" v-on:click="openMenu" type="button">
				  <span class="hamburger-box">
				    <span class="hamburger-inner"></span>
				  </span>
				</button>  
				<ul :class="(menuActive ? ' active' : '')">
					<button class="hamburger hamburger--boring active" v-on:click="closeMenu" type="button">
					  <span class="hamburger-box">
					    <span class="hamburger-inner"></span>
					  </span>
					</button> 
					<li><nuxt-link to="/work">Work</nuxt-link></li>
					<li><nuxt-link to="/about">About</nuxt-link></li>
					<li><nuxt-link to="/notes">Notes</nuxt-link></li>
					<li><nuxt-link to="/path">Designer's Path</nuxt-link></li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
	export default {
		data () {
			return {
		  	menuActive: false
		  }
		},
		methods: {
		  openMenu: function () {
		    this.menuActive = !this.menuActive
		  },
		  closeMenu: function (event) {
		    this.menuActive = false
		  }
		}
	};
</script>