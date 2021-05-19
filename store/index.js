import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedServices: [],
      loadedSpecialists: [],
      loadedGallery: [],
      loadedWorks: [],
      loadedSettings: []
    },
    mutations: {
      setServices(state, info) {
        state.loadedServices = info
      },
      setSpecialists(state, info) {
        state.loadedSpecialists = info
      },
      setGallery(state, info) {
        state.loadedGallery = info
      },
      setWorks(state, info) {
        state.loadedWorks = info
      },
      setSettings(state, info) {
        state.loadedSettings = info
      },
    },
    actions: {
      async nuxtServerInit(VuexContext, context) {
        const servicesResponse = await context.$axios.get(process.env.API + 'service?include=diseases.media')
        VuexContext.commit('setServices', servicesResponse.data.data)

        const specialistsResponse = await context.$axios.get(process.env.API + 'specialist?include=media')
        VuexContext.commit('setSpecialists', specialistsResponse.data.data)

        const galleryResponse = await context.$axios.get(process.env.API + 'gallery')
        VuexContext.commit('setGallery', galleryResponse.data.data)

        const worksResponse = await context.$axios.get(process.env.API + 'previous-work?include=media,disease')
        VuexContext.commit('setWorks', worksResponse.data.data)

        const settingsResponse = await context.$axios.get(process.env.API + 'setting')
        VuexContext.commit('setSettings', settingsResponse.data.data)
      },
      setServices(vuexContext, info) {
        vuexContext.commit('setServices', info)
      },
      setSpecialists(vuexContext, info) {
        vuexContext.commit('setSpecialists', info)
      },
      setGallery(vuexContext, info) {
        vuexContext.commit('setGallery', info)
      },
      setWorks(vuexContext, info) {
        vuexContext.commit('setWorks', info)
      },
      setSettings(vuexContext, info) {
        vuexContext.commit('setSettings', info)
      },
    },
    getters: {
      loadedServices(state) {
        return state.loadedServices
      },
      loadedSpecialists(state) {
        return state.loadedSpecialists
      },
      loadedGallery(state) {
        return state.loadedGallery
      },
      loadedWorks(state) {
        return state.loadedWorks
      },
      loadedSettings(state) {
        return state.loadedSettings
      }
    }
  })
}

export default createStore
