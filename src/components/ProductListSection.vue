<script setup>
import SecondaryButton from './SecondaryButton.vue'
import Item from './ProductListItem.vue'
defineProps({
  title: String
})
</script>
<template>
  <section>
    <h1>{{ title }}</h1>
    <ul>
      <li><Item /></li>
      <li><Item /></li>
      <li><Item /></li>
      <li><Item /></li>
    </ul>
    <SecondaryButton value="View All" />
  </section>
</template>
<style scoped>
section {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
}
h1 {
  color: black;
  text-align: center;
  font-size: 50px;
  text-transform: uppercase;
  /* place-content: center; */
}
button {
  align-self: center;
}
</style>
