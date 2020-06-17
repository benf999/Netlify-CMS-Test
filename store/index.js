// Following: https://github.com/tylermercer/nuxt-netlifycms-boilerplate/blob/master/store/index.js

export const state = () => ({
  hairProducts: []
})

export const mutations = {
  SET_POSTS (state, data) {
    state.hairProducts = data
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getHairProducts')
  },
  async getHairProducts ({ state, commit }) {
    const context = await require.context('~/assets/content/hair/', false, /\.json$/)

    const searchposts = await context.keys().map(key => ({
      ...context(key),
      _path: `/hair/${key.replace('.json', '').replace('./', '')}`
    }))

    commit('SET_POSTS', searchposts.reverse())
  }
}
