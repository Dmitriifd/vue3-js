<script>

export default {
  // Описание моделей
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript 1', body: 'Описание поста 1'},
        {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
        {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
      ],
      title: '',
      body: '',
    }
  },
  // Функции объявляются в поле methods
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    }
    // inputTite(event) {
    //   this.title = event.target.value
    // },
  }
};
</script>

<template>
  <div class="app">

    <form @submit.prevent> <!-- Отключение событий по умолчанию  -->
      <h2>Название поста</h2>
      <!-- Директива v-bind - позволяет связывать данные с компонентом -->
      <!-- Связывание через отдельную функцию -->
      <!--  @input="inputTite" -->
      <input v-bind:value="title" class="input" type="text" placeholder="Название" @input="title = $event.target.value">
      <input v-bind:value="body" class="input" type="text" placeholder="Описание" @input="body = $event.target.value">
      <button class="btn" @click="createPost">Добавить пост</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<!-- Флаг scoped - говорит о том что стили будут применены только к этому компоненту -->
<style>
  * {
    box-sizing: border-box;
  }
  .app {
    padding: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .post {
    padding: 15px;
    border: 1px solid blueviolet;
  }
  .post:not(:last-child) {
    margin-bottom: 15px;
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
