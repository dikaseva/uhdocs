<template>
  <div>
    <section class="page-header">
      <transition name="slide-fade">
        <h1 v-if="show" class="page-title">Components</h1>
        </transition>
    </section>
    <section class="page-content">
      <article class="page-article">
        
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
