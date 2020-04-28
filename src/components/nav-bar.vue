<template>
<div class="ui" id="js-ui">
    <nav class="scene_nav">
    <ol class="scene_nav_list">
      <li class="scene_nav_item">
        <router-link to="/home">
          <button class="scene_nav_button" @click="(scene = 1)" :class="{ 'o-active': scene === 1 }">home</button>
        </router-link>
      </li>
      <li class="scene_nav_item">
        <router-link to="/about">
          <button class="scene_nav_button" @click="(scene = 2)" :class="{ 'o-active': scene === 2 }">about</button>
        </router-link>
      </li>
      <li class="scene_nav_item">
        <router-link to="/projects">
          <button class="scene_nav_button" @click="(scene = 3)" :class="{ 'o-active': scene === 3 }">projects</button>
        </router-link>
      </li>
      <li class="scene_nav_item">
        <router-link to="/sport">
          <button class="scene_nav_button" @click="(scene = 4)" :class="{ 'o-active': scene === 4 }">sport</button>
        </router-link>
      </li>
      <li class="scene_nav_item">
        <router-link to="/skills">
          <button class="scene_nav_button" @click="(scene = 5)" :class="{ 'o-active': scene === 5 }">skills</button>
        </router-link>
      </li>
      <li class="scene_nav_item">
        <router-link to="/contact">
          <button class="scene_nav_button" @click="(scene = 6)" :class="{ 'o-active': scene === 6 }">contact</button>
        </router-link>
      </li>
    </ol>
  </nav>
</div>
</template>

<script>
export default {
  data () {
    return {
      scene: 0
    }
  }
}
</script>

<style scoped>
body {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
          justify-content: center;
  -webkit-box-align: center;
          align-items: center;
}
.ui {
  background: #fff;
}
.scene_nav_list {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.scene_nav_item {
  display: block;
}
.scene_nav_button {
  width: 100px;
  height: 40px;
  font-size: 14px;
  font-family: 'Source Serif Pro', sans-serif;
  font-weight: 600;
  border: none;
  background: #000;
  color: white;
  outline: none;
  cursor: pointer;
  -webkit-transition: 500ms;
  transition: 500ms;
}
.scene_nav_button.o-active {
  width: 200px;
  background: #fff;
  color: black;
}
.scene_nav_button:hover {
  background: #fff;
  color: black;
}
</style>
