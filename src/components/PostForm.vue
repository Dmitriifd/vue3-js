<template>
  <form @submit.prevent>
    <h2>Название поста</h2>
    <!-- Двусторонние связвывание с помощью v-model -->
    <input v-model="post.title" class="input" type="text" placeholder="Название" />
    <input v-model="post.body" class="input" type="text" placeholder="Описание" />
    <button class="btn">Добавить пост</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.input {
  width: 100%;
  border: 1px solid blueviolet;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn {
  align-self: flex-end;
  margin-top: 15px;
}
</style>
