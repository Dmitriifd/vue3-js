<script>
export default {
  // Описание моделей
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript 1', body: 'Описание поста 1'},
        {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
        {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
      ]
    }
  },
  // Функции объявляются в поле methods
  methods: {

  }
};
</script>

<template>
  <div>
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

  .post {
    padding: 15px;
    border: 1px solid blueviolet;
  }
  .post:not(:last-child) {
    margin-bottom: 15px;
  }
</style>
