<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <div class="container">
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
      <div class="search">
        <i class="bx bx-search"></i>
        <input type="search" placeholder="Search..." />
      </div>
      <div class="user-options">
        <RouterLink><i class="bx bx-user-circle"></i></RouterLink>
        <RouterLink><i class="bx bx-cart-alt"></i></RouterLink>
      </div>
    </div>
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
}
.container {
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
.search {
  background-color: #f0f0f0;
  border-radius: 62px;
  padding: 12px 16px;
  height: 48px;
  width: 577px;
  display: flex;
  place-items: center;
}
.search > input {
  /* flex: 1 1 1; */
  background-color: transparent;
  border: none;
  /* height: 100%; */
  width: 100%;
  outline: none;
}
.user-options i {
  font-size: 24px;
}
.user-options {
  display: flex;
  gap: 14px;
}
</style>
