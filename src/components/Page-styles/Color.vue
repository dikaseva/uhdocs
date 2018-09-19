<template>
  <div>
    <section class="page-header">
      <transition name="slide-fade">
        <h1 v-if="show" class="page-title">Color</h1>
        </transition>
    </section>
    <section class="page-content">
      <article class="page-article">
        <h2>Palette</h2>
        <p>The Urbanhire color palette comes with 8 different colors, followed by hue gradient colors.</p>
      </article>
      <article class="page-article is-full">
        <section>
          <h4>Blue Prime</h4>
          <div class="text-s">Used for: <span class="tag">Urbanhire</span><span class="tag">Urbanhire Blog</span><span class="tag">Job Seekers Audience</span></div>
          <div class="flex-container">
            <div class="card is-palette is-small">
              <header class="card-header blue-3"></header>
              <div class="card-summary">
                <h5>Blue Prime +40</h5>
                <p>HEX: #5be6ff</p>
                <p>RGB: rgb(91,230,255)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-2"></header>
              <div class="card-summary">
                <h5>Blue Prime +20</h5>
                <p>HEX: #47d2ff</p>
                <p>RGB: rgb(71,210,255)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-1"></header>
              <div class="card-summary">
                <h5>Blue Prime</h5>
                <p>HEX: #33beef</p>
                <p>RGB: rgb(51,190,239)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-4"></header>
              <div class="card-summary">
                <h5>Blue Prime -20</h5>
                <p>HEX: #1faadb</p>
                <p>RGB: rgb(31,170,219)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-5"></header>
              <div class="card-summary">
                <h5>Blue Prime -40</h5>
                <p>HEX: #0b96c7</p>
                <p>RGB: rgb(11,150,199)</p>
              </div>
            </div>
          </div>
        </section>
        <!--blue median-->
         <section>
          <h4>Blue Median</h4>
          <div class="text-s">Used for: <span class="tag">Urbanhire Pro</span><span class="tag">Urbanhire Resources</span></div>
          <div class="flex-container">
            <div class="card is-palette is-small">
              <header class="card-header blue-median-3"></header>
              <div class="card-summary">
                <h5>Blue Median +40</h5>
                <p>HEX: #4fb9ff</p>
                <p>RGB: rgb(79,185,255)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-median-2"></header>
              <div class="card-summary">
                <h5>Blue Median +20</h5>
                <p>HEX: #3ba5ed</p>
                <p>RGB: rgb(59,165,237)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-median-1"></header>
              <div class="card-summary">
                <h5>Blue Median</h5>
                <p>HEX: #2791D9</p>
                <p>RGB: rgb(39,145,217)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-median-4"></header>
              <div class="card-summary">
                <h5>Blue Median -20</h5>
                <p>HEX: #137dc5</p>
                <p>RGB: rgb(19,125,197)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-median-5"></header>
              <div class="card-summary">
                <h5>Blue Median -40</h5>
                <p>HEX: #0069b1</p>
                <p>RGB: rgb(0,105,177)</p>
              </div>
            </div>
          </div>
        </section>
        <!--blue median-->
        <section>
          <h4>Blue Firm</h4>
          <div class="text-s">Used for: <span class="tag">Urbanhire Pro</span><span class="tag">Recruiters Audience</span></div>
          <div class="flex-container">
            <div class="card is-palette is-small">
              <header class="card-header blue-firm-3"></header>
              <div class="card-summary">
                <h5>Blue Firm +40</h5>
                <p>HEX: #3f597d</p>
                <p>RGB: rgb(63,89,125)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-firm-2"></header>
              <div class="card-summary">
                <h5>Blue Firm +20</h5>
                <p>HEX: #2b4569</p>
                <p>RGB: rgb(43,69,105)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-firm-1"></header>
              <div class="card-summary">
                <h5>Blue Firm</h5>
                <p>HEX: #173155</p>
                <p>RGB: rgb(23,49,85)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-firm-4"></header>
              <div class="card-summary">
                <h5>Blue Firm -20</h5>
                <p>HEX: #031d41</p>
                <p>RGB: rgb(3,29,65)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-firm-5"></header>
              <div class="card-summary">
                <h5>Blue Firm -40</h5>
                <p>HEX: #00092d</p>
                <p>RGB: rgb(0,9,45)</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h4>Greyscale</h4>
          <div class="text-s">Used for: <span class="tag">General</span></div>
          <div class="flex-container">
            <div class="card is-palette is-small">
              <header class="card-header grey-3"></header>
              <div class="card-summary">
                <h5>Grey +160</h5>
                <p>HEX: #e2e2e2</p>
                <p>RGB: rgb(226,226,226)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header grey-2"></header>
              <div class="card-summary">
                <h5>Grey +80</h5>
                <p>HEX: #929292</p>
                <p>RGB: rgb(146,146,146)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header grey-1"></header>
              <div class="card-summary">
                <h5>Grey</h5>
                <p>HEX: #424242</p>
                <p>RGB: rgb(66,66,66)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header grey-4"></header>
              <div class="card-summary">
                <h5>Grey -20</h5>
                <p>HEX: #2e2e2e</p>
                <p>RGB: rgb(46,46,46)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header grey-5"></header>
              <div class="card-summary">
                <h5>Grey -40</h5>
                <p>HEX: #1a1a1a</p>
                <p>RGB: rgb(26,26,26)</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h4>Blue Tosca</h4>
          <div class="text-s">Used for: <span class="tag">General</span></div>
          <div class="flex-container">
            <div class="card is-palette is-small">
              <header class="card-header blue-tosca-3"></header>
              <div class="card-summary">
                <h5>Blue Tosca +40</h5>
                <p>HEX: #3ff4fd</p>
                <p>RGB: rgb(63,244,253)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-tosca-2"></header>
              <div class="card-summary">
                <h5>Blue Tosca +20</h5>
                <p>HEX: #2be0e9</p>
                <p>RGB: rgb(43,224,233)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-tosca-1"></header>
              <div class="card-summary">
                <h5>Blue Tosca</h5>
                <p>HEX: #17CCD5</p>
                <p>RGB: rgb(23,204,213)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-tosca-4"></header>
              <div class="card-summary">
                <h5>Blue Tosca -20</h5>
                <p>HEX: #03b8c1</p>
                <p>RGB: rgb(3,184,193)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header blue-tosca-5"></header>
              <div class="card-summary">
                <h5>Blue Tosca -40</h5>
                <p>HEX: #00a4ad</p>
                <p>RGB: rgb(0,164,173)</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h4>Green</h4>
          <div class="text-s">Used for: <span class="tag">General</span></div>
          <div class="flex-container">
            <div class="card is-palette is-small">
              <header class="card-header green-3"></header>
              <div class="card-summary">
                <h5>Green +40</h5>
                <p>HEX: #1bd060</p>
                <p>RGB: rgb(27, 208, 96)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header green-2"></header>
              <div class="card-summary">
                <h5>Green +20</h5>
                <p>HEX: #2fe474</p>
                <p>RGB: rgb(47, 228, 116)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header green-1"></header>
              <div class="card-summary">
                <h5>Green</h5>
                <p>HEX: #07BC4C</p>
                <p>RGB: rgb(7, 188, 76)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header green-4"></header>
              <div class="card-summary">
                <h5>Green -20</h5>
                <p>HEX: #00a838</p>
                <p>RGB: rgb(0, 168, 56)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header green-5"></header>
              <div class="card-summary">
                <h5>Green -40</h5>
                <p>HEX: #009424</p>
                <p>RGB: rgb(0, 148, 36)</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h4>Orange</h4>
          <div class="text-s">Used for: <span class="tag">General</span></div>
          <div class="flex-container">
            <div class="card is-palette is-small">
              <header class="card-header orange-3"></header>
              <div class="card-summary">
                <h5>Orange +40</h5>
                <p>HEX: #ffba37</p>
                <p>RGB: rgb(255, 186, 55)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header orange-2"></header>
              <div class="card-summary">
                <h5>Orange +20</h5>
                <p>HEX: #ffce4b</p>
                <p>RGB: rgb(255, 206, 75)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header orange-1"></header>
              <div class="card-summary">
                <h5>Orange</h5>
                <p>HEX: #F5A623</p>
                <p>RGB: rgb(245, 166, 35)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header orange-4"></header>
              <div class="card-summary">
                <h5>Orange -20</h5>
                <p>HEX: #e1920f</p>
                <p>RGB: rgb(225, 146, 15)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header orange-5"></header>
              <div class="card-summary">
                <h5>Orange -40</h5>
                <p>HEX: #cd7e00</p>
                <p>RGB: rgb(205, 126, 0)</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h4>Red</h4>
          <div class="text-s">Used for: <span class="tag">General</span></div>
          <div class="flex-container">
            <div class="card is-palette is-small">
              <header class="card-header red-3"></header>
              <div class="card-summary">
                <h5>Red +40</h5>
                <p>HEX: #e92b2b</p>
                <p>RGB: rgb(233, 43, 43)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header red-2"></header>
              <div class="card-summary">
                <h5>Red +20</h5>
                <p>HEX: #fd3f3f</p>
                <p>RGB: rgb(253, 63, 63)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header red-1"></header>
              <div class="card-summary">
                <h5>Red</h5>
                <p>HEX: #d51717</p>
                <p>RGB: rgb(213, 23, 23)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header red-4"></header>
              <div class="card-summary">
                <h5>Red -20</h5>
                <p>HEX: #c10303</p>
                <p>RGB: rgb(193, 3, 3)</p>
              </div>
            </div>
            <div class="card is-palette is-small">
              <header class="card-header red-5"></header>
              <div class="card-summary">
                <h5>Red -40</h5>
                <p>HEX: #ad0000</p>
                <p>RGB: rgb(173, 0, 0)</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
    <footer class="footer-nav">
      <router-link to="/branding">Branding</router-link>
      <router-link to="/icons">Icons</router-link>
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