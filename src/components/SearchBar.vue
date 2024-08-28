<template>
  <form class="search" @submit.prevent="submitSearch">
    <i class="bx bx-search"></i>
    <input v-model="searchQuery" type="search" placeholder="Search..." />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchQuery = ref('');

const submitSearch = () => {
  // Navigate to the search results page with the query parameter
  router.push({ path: '/brands', query: { search_query: searchQuery.value } });
};
</script>

<style scoped>
form {
  background-color: #f0f0f0;
  border-radius: 62px;
  padding: 12px 16px;
  height: 48px;
  width: 577px;
  display: flex;
  place-items: center;
}
input {
  /* flex: 1 1 1; */
  background-color: transparent;
  border: none;
  /* height: 100%; */
  width: 100%;
  outline: none;
}
/* Your styles here */
</style>
