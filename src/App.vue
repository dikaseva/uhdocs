<template>
  <div id="app">
    <Sidebar />
    <transition name="animate">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar'
export default {
  name: 'app',
  components: {
    Sidebar
  }
}

</script>
<style src="../static/css/style.css"></style>

<style>
.animate-enter-active {
  animation-duration: .5s;
  animation-fill-mode: both;
  animation-name: bounce;
  transform-origin: center bottom;
}
.animate-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.animate-enter, .animate-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  animation-duration: .5s;
  animation-name: bounce;
  transform-origin: center bottom;
  opacity: 0;
}
@keyframes bounce {
  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
}
.slide-fade-enter-active {
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
