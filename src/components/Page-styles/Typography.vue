<template>
  <div>
    <section class="page-header">
      <transition name="slide-fade">
        <h1 v-if="show" class="page-title">Typography</h1>
        </transition>
    </section>
    <section class="page-content">
      <article class="page-article">
        <p>
          <blockquote cite="https://fonts.google.com/specimen/Source+Sans+Pro">
            Source® Sans Pro, Adobe's first open source typeface family, was designed by Paul D. Hunt. It is a sans serif typeface intended to work well in user interfaces.
          </blockquote>
        </p>
      </article>
      <hr>
      <article class="page-article">
        <p>
          <h2>Typefaces</h2>
        </p>
        <div class="box-text">
            <h5>Primary Typeface</h5>
            <h4 class="text-xl">Source Sans Pro</h4>
        </div>
        <div class="box-text">
            <h5>Source Sans Pro Regular 400</h5>
              <p class="text-xl">ABCDEFGHIJKLM <br>
              abcdefghijklm
              </p>
        </div>
        <div class="box-text">
            <h5>Source Sans Pro Regular Italic 400</h5>
              <p class="text-xl text-italic">ABCDEFGHIJKLM <br>
              abcdefghijklm
              </p>
        </div>
        <div class="box-text">
            <h5>Source Sans Pro Bold 700</h5>
              <p class="text-xl text-bold">ABCDEFGHIJKLM <br>
              abcdefghijklm
              </p>
        </div>
        <div class="box-text">
            <h5>Source Sans Pro Bold Italic 700</h5>
              <p class="text-xl text-bold text-italic">ABCDEFGHIJKLM <br>
              abcdefghijklm
              </p>
        </div>
        <hr>
        <div class="box-text">
            <h5>Secondary Typeface</h5>
            <h4 class="text-xl font-secondary">Josefin Sans</h4>
        </div>
        <div class="box-text">
            <h5 class="font-secondary">Josefin Sans Regular 400</h5>
              <p class="text-xl font-secondary">ABCDEFGHIJKLM <br>
              abcdefghijklm
              </p>
        </div>
        <div class="box-text">
            <h5 class="font-secondary">Josefin Sans Semi Bold 600</h5>
              <p class="text-xl text-semi-bold font-secondary">ABCDEFGHIJKLM <br>
              abcdefghijklm
              </p>
        </div>
        
      </article>
      <hr>
      <article class="page-article">
        <p>
          <h2>Text Color</h2>
        </p>
          <div class="flex-container">
            
            <div class="card is-palette is-small">
              <header class="card-header grey-5"></header>
              <div class="card-summary">
                <h4>Primary</h4>
                <p>HEX: #1a1a1a</p>
                <p>RGB: rgb(26,26,26)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header grey-1"></header>
              <div class="card-summary">
                <h4>Secondary</h4>
                <p>HEX: #424242</p>
                <p>RGB: rgb(66,66,66)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header grey-2"></header>
              <div class="card-summary">
                <h4>Subtle</h4>
                <p>HEX: #929292</p>
                <p>RGB: rgb(146,146,146)</p>
              </div>
            </div>
            
          </div>
      </article>
      <hr>
      <article class="page-article is-full">
        <p>
          <h2>Text Sizes</h2>
        </p>
        <div class="box-text">
          <div class="row">
            <div class="grid-3">
              <h5>H1</h5>
              <p>36px</p>
            </div>
            <div class="grid-5">
              <h1>Heading One</h1>
            </div>
            <div class="grid-4">
              <p class="capsuled">Line height: 1.5em (1.5 * 36 = 54px)</p>
            </div>
          </div>
          <hr>
        </div>
        <div class="box-text">
          <div class="row">
            <div class="grid-3">
              <h5>H2</h5>
              <p>32px</p>
            </div>
            <div class="grid-5">
              <h2>Heading Two</h2>
            </div>
            <div class="grid-4">
              <p class="capsuled">Line height: 1.5em (1.5 * 32 = 48px)</p>
            </div>
          </div>
            <hr>
        </div>
        <div class="box-text">
          <div class="row">
            <div class="grid-3">
              <h5>H3</h5>
              <p>24px</p>
            </div>
            <div class="grid-5">
              <h3>Heading Three</h3>
            </div>
            <div class="grid-4">
              <p class="capsuled">Line height: 1.5em (1.5 * 24 = 36px)</p>
            </div>
          </div>
          <hr>
        </div>
        <div class="box-text">
          <div class="row">
            <div class="grid-3">
              <h5>H4</h5>
              <p>22px</p>
            </div>
            <div class="grid-5">
              <h4>Heading Four</h4>
            </div>
            <div class="grid-4">
              <p class="capsuled">Line height: 1.5em (1.5 * 22 = 33px)</p>
            </div>
          </div>
          <hr>
        </div>
        <div class="box-text">
          <div class="row">
            <div class="grid-3">
              <h5>H5</h5>
              <p>18px</p>
            </div>
            <div class="grid-5">
              <h5>Heading Five</h5>
            </div>
            <div class="grid-4">
              <p class="capsuled">Line height: 1.5em (1.5 * 18 = 27px)</p>
            </div>
          </div>
          <hr>
        </div>
        <div class="box-text">
          <div class="row">
            <div class="grid-3">
              <h5>H6</h5>
              <p>12px</p>
            </div>
            <div class="grid-5">
              <h6>Heading Six</h6>
            </div>
            <div class="grid-4">
              <p class="capsuled">Line height: 1.5em (1.5 * 12 = 18px)</p>
            </div>
          </div>
          <hr>
        </div>
         <div class="box-text">
          <div class="row">
            <div class="grid-3">
              <h5>P</h5>
              <p>16px</p>
            </div>
            <div class="grid-5">
              <p>Paragraph</p>
            </div>
            <div class="grid-4">
              <p class="capsuled">Line height: 1.5em (1.5 * 16 = 24px)</p>
            </div>
          </div>
          
        </div>
      </article>
      <hr>
      <article class="page-article">
        <h2>Links</h2>
        <ul>
            <li><a href="https://fonts.google.com/specimen/Source+Sans+Pro" target="_blank">Source Sans Pro</a></li>
            <li><a href="https://fonts.google.com/specimen/Josefin+Sans" target="_blank">Josefin Sans</a></li>
          </ul>
      </article>
    </section>
    <footer class="footer-nav">
      <router-link to="/icons">Icons</router-link>
      <router-link to="/layout">Layout</router-link>
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
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  .font-secondary{
    font-family: 'Josefin Sans', sans-serif;
  }
</style>
