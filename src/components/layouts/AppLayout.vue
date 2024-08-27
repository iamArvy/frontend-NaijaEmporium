<template>
  <HeaderBar class="sticky full-width" />
  <main>
    <slot />
  </main>
  <FooterBar class="full-width" />
</template>
<script setup>
import HeaderBar from '../HeaderBar.vue'
import FooterBar from '../FooterBar.vue'
// import NewHeader from './Partials/NewHeader.vue';
// import { Head } from '@inertiajs/vue3';

// defineProps({
//     title: String,
// })
</script>

<!-- <style>
main {
  background-color: var(--bodybg);
  color: var(--bodytext);
  /* height: 100vh; */
}
main {
  position: relative;
  margin-top: var(--headerheight);
}
</style> -->
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,500&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
:root {
  --gradient: linear-gradient(to left, #0000ff, #00ffff);
  --primary: #101357;
  --secondary: #fbaf08;
  --heading: #101357;
  --subheading: #00ff00;
  --headerbg: #101357;
  --bodytext: #333333;
  --buttonbg: #fbaf08;
  --bodybg: #fffff0;
  --herotext: #ffbf00;
  --headerheight: 70px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
/* .body{
    max-width: 100vw;
    overflow: hidden;
} */
/* .sticky{
    position: fixed;
    top: 0;
    z-index: 99;
    padding: 5px 2rem;
} */
.solid-heading {
  /* color:rgba(66, 68, 110, 1); */
  font-weight: bold;
  font-family: Poppins, sans-serif;
}
.my-button {
  background-color: var(--buttonbg);
}
.button-success {
  color: rgba(215, 255, 224, 1);
}
main {
  background-color: var(--bodybg);
  color: var(--bodytext);
  /* height: 100vh; */
}
main,
.full-width {
  --padding-inline: 6rem;
  --content-max-width: 1280px;
  /* display: flex; */
  /* flex-direction: column; */
  /* overflow-y: auto; */
  display: grid;
  grid-template-columns:
    [full-width-start] minmax(var(--padding-inline), 1fr) [content-start] min(
      100% - (var(--padding-inline) * 2),
      var(--content-max-width)
    )
    [content-end] minmax(var(--padding-inline), 1fr) [full-width-end];
  /* grid-template-rows: repeat(1fr) ; */
  /* row-gap: 2rem; */
}
main > *:not(.full-width),
.full-width > *:not(.full-width) {
  grid-column: content;
}
main > .full-width {
  grid-column: full-width;
  /* display: grid; */
}
main {
  position: relative;
  margin-top: var(--headerheight);
}
</style>
