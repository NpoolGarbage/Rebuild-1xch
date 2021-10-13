<template>
  <div>
    <h1>{{ myTranslation.title }}</h1>
    <div v-html="myTranslation.above"></div>
    <div v-html="myTranslation.yi"></div>
    <div v-html="myTranslation.er"></div>
    <div v-html="myTranslation.san"></div>
    <div v-html="myTranslation.si"></div>
    <div v-html="myTranslation.wu"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },

  created: function() {
    this.$store.commit('lang/setAllTranslation', this.$cookies.get('lang'));
  },

  computed: {
    myTranslation: function () {
      return this.$store.state.lang.allTranslation.law;
    },
  },
}
</script>

<style scoped>
</style>