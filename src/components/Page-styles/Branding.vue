<template>
  <div>
      <section id="testmen" class="page-header">
        <transition name="slide-fade">
        <h1 v-if="show" class="page-title">Branding</h1>
        </transition>

      </section>
    
    
    <section class="page-content">
      <article class="page-article">
        <p>The following downloads include the Logo of Urbanhire in various size with various color based on Urbanhire logo guidelines, the following file includes:</p>
        <p>
          <ul>
            <li>PNG full logo &amp; short logo (20px, 32px, 64px, 96px, 128px, 256px, 512px, 1024px, 2500px)</li>
            <li>SVG</li>
            <li>PDF</li>
            <li>Sketch</li>
          </ul>
        </p>
        <p><a href="../../static/assets/urbanhire_logo_package.zip">Download package</a></p>
      </article>
      <hr>
      <article class="page-article">
        <h2>Logo guidelines</h2>
        <p>Logo Urbanhire can be used in four ways</p>
        
        <figure>
            <figcaption>Prime Blue</figcaption>
            <img src="../../assets/logo-opt-1.png" class="logo-wrap" alt="">
          </figure>

          <figure>
            <figcaption>Prime Blue Fill</figcaption>
            <img src="../../assets/logo-opt-2.png" class="logo-wrap" alt="">
          </figure>

          <figure>
            <figcaption>Firm Blue</figcaption>
            <img src="../../assets/logo-opt-3.png" class="logo-wrap" alt="">
          </figure>

          <figure>
            <figcaption>Grey</figcaption>
            <img src="../../assets/logo-opt-4.png" class="logo-wrap" alt="">
          </figure>
        <br>
        <h2>Clear space logo</h2>
        <figure>
          <figcaption>Full logo</figcaption>
          <img src="../../assets/logo-clear-space.png" alt="">
        </figure>
        <figure>
          <figcaption>Short logo</figcaption>
          <img class="bordered" src="../../assets/logo-clear-space-secondary.png" alt="">
        </figure>
      </article>
    </section>
    <footer class="footer-nav">
      <router-link to="/">Homepage</router-link>
      <router-link to="/color">Color</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show : false
    }
  },

  mounted() {
    setTimeout(()=>{
      this.show = true
    }, 500)
  }
}
</script>