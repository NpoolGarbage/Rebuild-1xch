<template>
  <div>
    <h1>{{ myTranslation.title }}</h1>
    <div v-html="myTranslation.ablove"></div>
    <div v-html="myTranslation.yi"></div>
    <div v-html="myTranslation.er"></div>
    <div v-html="myTranslation.san"></div>
    <div v-html="myTranslation.si"></div>
    <div v-html="myTranslation.wu"></div>
    <div v-html="myTranslation.liu"></div>
    <div v-html="myTranslation.qi"></div>
    <div v-html="myTranslation.ba"></div>
    <div v-html="myTranslation.jiu"></div>
    <div v-html="myTranslation.shi"></div>
    <div v-html="myTranslation.shiyi"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },

  created: function(){
    this.$store.commit('lang/setAllTranslation', this.$cookies.get('lang'));
  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.policy;
    },
  },
}
</script>

<style scoped>
</style>