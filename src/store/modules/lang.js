import * as zh from "../../assets/lang/zh"
import * as en from "../../assets/lang/en"
import * as ja from "../../assets/lang/ja"

const zhLang = zh.allTranslation;
const enLang = en.allTranslation;
const jaLang = ja.allTranslation;

const state = () => ({
  allTranslation: zhLang,
})

const getters = {}

const actions = {

}

const mutations = {
  setAllTranslation(state, lang) {
    switch (lang) {
      case 'ch':
        state.allTranslation = zhLang;
        break;
      case 'en':
        state.allTranslation = enLang;
        break;
      case 'ja':
        state.allTranslation = jaLang;
        break;

      default:
        break;
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}