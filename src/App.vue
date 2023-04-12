<script>
export default {
  // Описание моделей
  data() {
    return {
      likes: 0,
      dislikes: 0
    }
  },
  // Функции объявляются в поле methods
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
  }
};
</script>

<template>
  <div>
    <!-- Слушатели событий v-on -->
    <button v-on:click="addLike">Like</button>
    <!-- Короткая запись -->
    <button @click="addDislike">Dislike</button>
  </div>
  <div>Кол-во лайков {{ likes }}</div>
  <div>Кол-во дизлайков {{ dislikes }}</div>
</template>

<style>
</style>
