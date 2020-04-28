<template>
  <div id="app">
    <navBar />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import navBar from './components/nav-bar'

export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>

<style>

.fade-enter-active {
    animation: fade-fade 0.7s ease-in-out;
}

@keyframes fade-fade{
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
    0% {
      opacity: 0;
    }
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fff;
  font-family: 'Source Serif Pro', sans-serif;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
}

::selection {
  background: black;
  color: white;
}

@media only screen and (max-width: 600px) {
  body {
    position: fixed;
    overflow-y: auto;
  }
}

</style>
