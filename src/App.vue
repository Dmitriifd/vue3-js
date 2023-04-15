<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="fetchPosts">Получить посты</my-button>
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
import axios from 'axios';

export default {
  // Регистрация компонентов
  components: {
    PostForm,
    PostList
  },

  data() {
    return {
      posts: [],
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
    },
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
      } catch (e) {
        alert('Error')
      }
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
