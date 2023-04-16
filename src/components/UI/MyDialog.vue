<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <!-- Добавление stopPropagation - здесь это сокращено stop -->
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '../mixins/toggleMixin';

export default {
  name: 'my-dialog',
  mixins: [toggleMixin]
};
</script>

<style scoped>
.dialog {
  position: fixed;
  inset: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}
.dialog__content {
  min-width: 300px;
  padding: 20px;
  margin: auto;
  background-color: white;
  border-radius: 12px;
}
</style>
