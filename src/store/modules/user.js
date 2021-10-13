import {getAxios} from '../../assets/getaxios'
import {ElNotification} from 'element-plus'

const state = () => ({
  userInfo: {},
})

const getters = {}

const actions = {
  // getUserInfo ({commit}, params) {
  //   let userInfo = getMyUserInfo(params);
  //   console.log('user info is', userInfo);
  //   commit('setUserInfo', userInfo);
  // }
}

const mutations = {
  setUserInfo: function(state, userInfo){
    state.userInfo = userInfo;
  },
}

function getMyUserInfo(params) {
  let self = this;

  getAxios('http://api.1xch.one/index.php?c=user&a=user_info', 'post', params).then(response => {
    let resp = response.data;
    if (resp.code !== 0) {
      ElNotification.error({
        title: resp.msg,
        message: resp.msg,
      });
      return;
    }

    return resp;
  }).catch(error => {
    ElNotification.error({
      title: error,
      message: error,
    });
    return;
  })
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}