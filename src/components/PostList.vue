<template>
  <!-- директива v-show - чтобы элемент полностью не удалялся из дом дерева -->
  <!-- v-show="posts.length > 0" -->
  <div v-if="posts.length > 0">
    <h3>Список Постов</h3>
    <TransitionGroup name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)" />
    </TransitionGroup>
  </div>
  <!-- Также есть v-else-if -->
  <!-- v-show="posts.length === 0" -->
  <h2 v-else class="danger">Список постов пуст</h2>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.danger {
  color: darkred;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move{
  transition: transform 0.4s ease;
}
</style>
