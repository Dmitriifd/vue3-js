<template>
    <!-- slot - для отображения текста переданого в компонент -->
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: 'my-button'
};
</script>

<style scoped>
.btn {
  align-self: flex-end;
}
</style>
