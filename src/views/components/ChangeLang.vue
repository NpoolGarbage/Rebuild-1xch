<template>
  <div>
    <el-radio-group v-model="myLang">
      <el-radio-button label="en" @click="changeTo('en')">English</el-radio-button>
      <el-radio-button label="ja" @click="changeTo('ja')">日本語</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  props: ['myLang'],

  data: function () {
    return {
      myLang: 'English',
    }
  },

  methods: {
    changeTo: function (lang) {
      this.$cookies.set('lang', lang);
      this.$store.commit('lang/setAllTranslation', lang);
    },
  },
}
</script>

<style scoped>
</style>