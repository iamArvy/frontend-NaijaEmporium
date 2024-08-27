<script setup>
// import { defineComponent } from '@vue/composition-api'
defineProps({
    items: Array
})
</script>

<template>
    <div class="footer-nav-list">
        <h2><slot /></h2>
        <ul>
          <li v-for="item in items" :key="item">
            <router-link :to="item.url">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
</template>
<style scoped>
h2{
    text-transform: uppercase;
}
</style>