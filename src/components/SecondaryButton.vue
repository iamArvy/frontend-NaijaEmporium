<script setup>
defineProps({
  value: String
})
</script>
<template>
  <button>{{ value }}</button>
</template>
<style scoped>
button {
  background-color: white;
  padding: 16px 54px;
  width: fit-content;
  color: black;
  border-radius: 62px;
  border: 1px solid var(--grey);
}
</style>