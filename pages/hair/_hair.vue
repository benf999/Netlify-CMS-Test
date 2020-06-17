<template>
  <article>
    <h1>{{ hairProduct.title }}</h1>
    <div>{{ hairProduct.body }}</div>
  </article>
</template>

<script>

export default {
  async asyncData ({ params, payload }) {
    if (payload) {
      return { hairProduct: payload }
    } else {
      return { hairProduct: await require(`~/assets/content/hair/${params.hair}.json`) }
    }
  }
}

</script>
