<template>
  <form @submit.prevent>
    <h2>Создание поста</h2>
    <!-- Двусторонние связвывание с помощью v-model -->
    <my-input v-focus v-model="post.title" v-model:value="post.title" type="text" placeholder="Название" />
    <my-input v-model="post.body" type="text" placeholder="Описание" />
    <my-button @click="createPost" class="btn">Добавить пост</my-button>
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
  methods: {
    createPost() {
      this.post.id = Date.now();
      // emit - Принимает первым параметром название события
      // Вторым и последущими параметрами, передаются аргументы которые будут поподать в соответсвующию функцию, после того как на нее подпишится родительский компонент
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: ''
      };
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
</style>
