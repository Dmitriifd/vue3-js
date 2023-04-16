<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск...." v-focus />
    <div class="app__btns">
      <my-button> Создать Пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
    <div class="load-wrapp" v-else>
      <div class="load-3">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import MyButton from '../components/UI/MyButton.vue';
import MySelect from '../components/UI/MySelect.vue';
import MyInput from '../components/UI/MyInput.vue';
import { usePosts } from '../hooks/usePosts';
import useSortedPosts from '../hooks/useSortedPosts';
import useSortedAndSearchedPosts from '../hooks/useSortedAndSearchedPosts';
export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    PostList,
    PostForm
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержанию' }
      ]
    };
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts);
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    };
  }
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
