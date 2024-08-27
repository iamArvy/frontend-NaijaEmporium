<script setup>
import NavList from './FooterNavList.vue'
const items = [
  {name: "about", url: "/"},
  {name: "about", url: "/"},
  {name: "about", url: "/"},
  {name: "about", url: "/"},
]
</script>

<template>
  <section>
    <div class="top">
      <div class="footer-about">
        <div class="logo"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" /></div>
        <p>We have Shoes that suits your style and which you're proud to wear, From women to men.</p>
        <div class="socials"></div>
      </div>
      <NavList :items="items">Company</NavList>
      <NavList :items="items">Help</NavList>
      <NavList :items="items">FAQ</NavList>
      <NavList :items="items">RESOURCES</NavList>
    </div>
    <h1>Hi</h1>
  </section>
</template>
