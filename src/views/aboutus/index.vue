<template>
  <div>
    <div>
      <h1>{{ myTranslation.title }}</h1>
      <p>{{ myTranslation.yi }}</p>
      <p>{{ myTranslation.er }}</p>
      <p>{{ myTranslation.san }}</p>
    </div>
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
      return this.$store.state.lang.allTranslation.aboutus;
    },
  },
}
</script>

<style scoped>
</style>