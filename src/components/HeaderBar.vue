<script setup lang=ts>
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router';
import SearchBar from './SearchBar.vue';
const router = useRouter();

const search = (query: string) => {
  router.push({ path: '/brands', query: { search_query: query } });
};
</script>
<template>
  <header>
    <section>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
      <nav>
        <div id="shop-list">
          Shop
          <i class="bx bx-chevron-down"></i>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Shoes</li>
            <li>Clothes</li>
            <li>Bags</li>
            <li>Testing</li>
            <li>Testing</li>
          </ul>
        </div>
        <RouterLink>On Sale</RouterLink>
        <RouterLink>New Arrivals</RouterLink>
        <RouterLink>Brand</RouterLink>
      </nav>
      <SearchBar />
      <div class="user-options">
        <RouterLink><i class="bx bx-user-circle"></i></RouterLink>
        <RouterLink><i class="bx bx-cart-alt"></i></RouterLink>
      </div>
    </section>
  </header>
</template>
<style scoped>
header {
  height: var(--headerheight);
  font-family: Poppins, sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 16px;
  z-index: 999999;
  background: white;
  display: flex;
  place-items: center;
}
section {
  display: flex;
  place-items: center center;
  justify-content: space-between;
  width: 100%;
}
#shop-list {
  cursor: pointer;
  position: relative;
}
#shop-list:hover ul {
  display: block;
  position: absolute;
  width: fit-content;
  padding: 10px;
  background: blue;
  /* z-index: 999999; */
}
#shop-list ul {
  display: none;
}
nav {
  display: flex;
  gap: 24px;
  place-items: center;
}
a {
  color: black;
}
.user-options i {
  font-size: 24px;
}
.user-options {
  display: flex;
  gap: 14px;
}
</style>
