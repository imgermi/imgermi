<template>
  <main>
    <section class="hero">
      <div class="container">
        <h1 class="hero__title">Notes</h1>
        <h2 class="hero__sub">I'm still building this page, but in the meantime, you can check some articles I published on Medium.</h2>
      </div>
    </section>
    <section class="band notes left list">
      <div class="container">
        <div class="band__img">
          <a class="post" href="https://medium.com/weland-agency/learning-by-doing-acquiring-skills-when-the-situation-demands-it-5f4f2cbc7bb0" target="_blank">
            <h6 class="post__title">Learning by doing: acquiring skills when the situation demands it</h6>
            <small class="post__date">Mar 29 - 4 min read</small>
          </a>
          <a class="post" href="https://medium.com/@imgermi/fuck-the-tools-time-to-start-focusing-on-solutions-cbd955030d7e" target="_blank">
            <h6 class="post__title">Let the tools go: time to start focusing on solutions</h6>
            <small class="post__date">Apr 04 - 4 min read</small>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Notes'
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'After having a long client meeting that went terrible, I decided to write all of my thoughts on a sheet of paper. After 25 minutes, I realised I wanted to start documenting every single thing I do as a designer.' }
        ]
      }
    }
  }
</script>