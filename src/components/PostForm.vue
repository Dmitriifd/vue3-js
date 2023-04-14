<template>
  <form @submit.prevent>
    <h2>Название поста</h2>
    <!-- Двусторонние связвывание с помощью v-model -->
    <input v-model="post.title" class="input" type="text" placeholder="Название" />
    <input v-model="post.body" class="input" type="text" placeholder="Описание" />
    <button @click="createPost" class="btn">Добавить пост</button>
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

.input {
  width: 100%;
  border: 1px solid blueviolet;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn {
  align-self: flex-end;
  margin-top: 15px;
}
</style>
