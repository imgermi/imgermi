<template>
  <main>
    <section class="hero">
      <div class="container">
        <h1 class="hero__title">Designer's Path</h1>
        <h2 class="hero__sub">For the past 3 years, since I started in design, I've been reading books from different authors and fields, and they became one of the most important tools for me to grow as a designer. I can't believe people actually don't realise how much value you can get out of a book. My personal book list, being constantly updated, is one of the main resources I use to become a better designer:</h2>
      </div>
    </section>
    <section class="book-list">
      <div class="container">
        <article class="book">
          <img src="~/assets/images/path/creative-confidence.jpg" alt="">
          <h3>Creative Confidence</h3>
          <h4>Tom Kelley & David Kelley</h4>
        </article>
        <article class="book">
          <img src="~/assets/images/path/steal-like-an-artist.jpg" alt="">
          <h3>Steal Like an Artist</h3>
          <h4>Austin Kleon</h4>
        </article>    
        <article class="book">
          <img src="~/assets/images/path/show-your-work.jpg" alt="">
          <h3>Show Your Work</h3>
          <h4>Austin Kleon</h4>
        </article> 
        <article class="book">
          <img src="~/assets/images/path/grid.jpg" alt="">
          <h3>Grid Systems</h3>
          <h4>Josef Müller-Brockmann</h4>
        </article>        
        <article class="book">
          <img src="~/assets/images/path/sprint.jpg" alt="">
          <h3>Sprint</h3>
          <h4>Jake Knapp, John Zeratsky & Braden Kowitz</h4>
        </article>
        <article class="book">
          <img src="~/assets/images/path/hacking-growth.jpg" alt="">
          <h3>Hacking Growth</h3>
          <h4>Sean Ellis</h4>
        </article>
        <article class="book">
          <img src="~/assets/images/path/crush-it.jpg" alt="">
          <h3>Crush It</h3>
          <h4>Gary Vaynerchuk</h4>
        </article>
        <article class="book">
          <img src="~/assets/images/path/crushing-it.jpg" alt="">
          <h3>Crushing It</h3>
          <h4>Gary Vaynerchuk</h4>
        </article>       
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Designer\'s Path'
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'Documenting the learning journey of a designer since a career beginning, through every book and resource that made a big impact.' }
        ]
      }
    }
  }
</script>