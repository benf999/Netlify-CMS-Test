<template lang="html">
  <div class="main">
    <div class="main-header">
      <h1>{{ siteInfo.sitename }}</h1>
      <p>{{ siteInfo.sitedescription }}</p>
    </div>
    <div class="posts-list">
      <h2 class="posts-list-title">
        Posts
      </h2>
      <p v-for="product in hairProducts" :key="product.id" class="post-link">
        <n-link :to="product._path">
          {{ product.title }}
        </n-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hairProducts () {
      return this.$store.state.hairProducts
    }
  }
}
</script>

<style lang="css" scoped>
.posts-list {
  width: 100%;
  background-color: whitesmoke;
  padding: 20px;
  margin-top: 35px;
}
.post-link {
  padding-top: 10px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.main-header {
  text-align: center;
}
</style>
