const state = () => ({
  totalOrder: {},
  progressOrder: {},
  waitOrder: {},
  endOrder: {},
})

const getters = {}

const actions = {
}

const mutations = {
  setOrder: function(state, totalOrder, progressOrder, waitOrder, endOrder){
    state.totalOrder = totalOrder;
    state.progressOrder = progressOrder;
    state.waitOrder = waitOrder;
    state.endOrder = endOrder;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}