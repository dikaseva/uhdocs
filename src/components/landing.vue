<template>
  <div>
    <section class="page-hero">
      <h1 class="heading-landing">Urbanhire <span>Guidelines</span></h1>
      <img :src="imageSource" alt="" class="eggsy">
      <p class="author">By team <b>Ultron</b> <img src="../assets/ultron-sign.png" alt=""></p>

    </section>
  </div>
</template>


<script>
import eggsy from '../assets/eggsy.png';

export default {
  name: 'homepage',
  data () {
    return {
      msg: 'Urbanhire Pro Guidelines',
      imageSource: eggsy
    }
  }
}

</script>
