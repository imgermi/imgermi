<template>
  <main>
    <section class="hero">
      <div class="container">
        <h1 class="hero__title">Designer's Path</h1>
        <h2 class="hero__sub">I'm still building this page.</h2>
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