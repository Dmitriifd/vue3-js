<template>
  <div class="navbar">
    <div class="navbar__logo" @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О сайте</my-button>
      <my-button @click="$router.push('/store')">store</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: blueviolet;
  box-shadow: 2px 2px 4px rgb(209, 208, 208);
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  display: flex;
  gap: 10px;
  margin-left: auto;
}
.navbar__btns button {
  background-color: transparent;
  color: white;
}
.navbar__logo {
  cursor: pointer;
  color: white;
}
</style>
