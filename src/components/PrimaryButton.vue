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
  background-color: #000000;
  padding: 16px 54px;
  width: fit-content;
  color: white;
  border-radius: 62px;
}
</style>
