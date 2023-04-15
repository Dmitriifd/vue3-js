<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск..."/>
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <!-- Передача пропсов -->
    <!-- <post-list v-bind:posts="posts"/> -->
    <!-- короткая запись -->
    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading" />
    <!-- <div v-else>Loading...</div> -->
     <div class="load-wrapp" v-else>
      <div class="load-3">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <div class="page__wrapper">
      <div class="page" v-for="pageNumber in totalPages" :key="pageNumber" :class="{
        'current-page': page === pageNumber
      }" @click="changePage(pageNumber)">{{ pageNumber }}</div>
    </div>
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
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержанию' }
      ]
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
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = response.data;
          this.isPostLoading = false;
        }, 1000);
      } catch (e) {
        alert('Error');
      } finally {
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    page() {
      this.fetchPosts()
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
.app__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.load-wrapp {
  margin: 0 auto;
  width: 100px;
  height: 70vh;
  padding: 20px 20px 20px;
  border-radius: 5px;
}
.line {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: blueviolet;
}
.load-3 .line:nth-last-child(1) {
  animation: loadingC 0.6s 0.1s linear infinite;
}
.load-3 .line:nth-last-child(2) {
  animation: loadingC 0.6s 0.2s linear infinite;
}
.load-3 .line:nth-last-child(3) {
  animation: loadingC 0.6s 0.3s linear infinite;
}
.page__wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
}
.page {
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1rem;
    font-weight: 500;
    background-color: #f9f9f9;
    cursor: pointer;
}
.current-page {
  border: 1px solid blueviolet;
}
@keyframes loadingC {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
