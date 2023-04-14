<template>
  <form @submit.prevent>
    <h2>Название поста</h2>
    <!-- Двусторонние связвывание с помощью v-model -->
    <input v-model="post.title" class="input" type="text" placeholder="Название" />
    <input v-model="post.body" class="input" type="text" placeholder="Описание" />
    <my-button @click="createPost" class="btn">Добавить пост</my-button>
  </form>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
  components: {
    MyButton
  },
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
.input {
  width: 100%;
  border: 1px solid blueviolet;
  padding: 10px 15px;
  margin-bottom: 15px;
}
</style>
