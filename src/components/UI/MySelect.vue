<template>
  <select :model-value="modelValue" @change="changeOption" class="select">
    <option selected disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style scoped>
.select {
  border-radius: 8px;
  border: 1px solid #f9f9f9;
  padding: 0.6em 1.2em;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
}
</style>
