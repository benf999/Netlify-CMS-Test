export const state = () => ({
  blogPosts: [],
  allPages: [],
  siteInfo: []
})

export const mutations = {
  SET_POSTS (state, data) {
    state.blogPosts = data
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getSiteInfo')
    await dispatch('getBlogPosts')
    await dispatch('getPages')
  },
  async getBlogPosts ({ state, commit }) {
    const context = await require.context('~/assets/content/blog/', false, /\.json$/)

    const searchposts = await context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }))

    commit('SET_POSTS', searchposts.reverse())
  }
}
