<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-focus :model-value="searchQuery" placeholder="Поиск..." @update:model-value="setSearchQuery"/>
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select :model-value="selectedSort" :options="sortOptions" @update:model-value="setSelectedSort"/>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading" />
    <div class="load-wrapp" v-else>
      <div class="load-3">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  components: {
    PostForm,
    PostList
  },

  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
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
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch: {}
};
</script>

<style scoped>
.app__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.load-wrapp {
  margin: 0 auto;
  width: 100px;
  height: 100px;
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
.observer {
  height: 30px;
  background-color: blueviolet;
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
