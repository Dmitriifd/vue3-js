<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <!-- Модификаторы v-model (trim - удаляет пробелы), number, lazy -->
    <input type="text" v-model.trim="modificatorValue">
    <my-button @click="showDialog">Создать пост</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <!-- Передача пропсов -->
    <!-- <post-list v-bind:posts="posts"/> -->
    <!-- короткая запись -->
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

export default {
  // Регистрация компонентов
  components: {
    PostForm,
    PostList
  },

  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript 1', body: 'Описание поста 1' },
        { id: 2, title: 'JavaScript 2', body: 'Описание поста 2' },
        { id: 3, title: 'JavaScript 3', body: 'Описание поста 3' }
      ],
      dialogVisible: false,
      modificatorValue: ''
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
