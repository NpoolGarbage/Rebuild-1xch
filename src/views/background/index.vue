<template>
  <div class="main-background">
    <div class="header-translate">
      <div style="color: white; margin-right: 10px;">
        <!-- <el-select v-model="lang" style="width: 120px" @change="selectLang">
          <el-option v-for="la in langs" :key="la.value" :label="la.label" :value="la.value"></el-option>
        </el-select> -->
        <change-lang :myLang="lang"></change-lang>
      </div>
    </div>
    <div class="div-style">
      <div class="title-style">
        <el-image :src="url"></el-image>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import backurl from '../../assets/img/digital-title.png'
import ChangeLang from '../components/ChangeLang.vue'

export default {
  components: { ChangeLang },
  data() {
    return {
      url: backurl,
      lang: 'en',
      langs: [
        {
          value: 'ch',
          label: '简体中文',
        },
        {
          value: 'ja',
          label: '日本語',
        },
        {
          value: 'en',
          label: 'English',
        },
      ],
    }
  },

  created: function() {
    this.$cookies.set('lang', this.lang);
    this.$store.commit('lang/setAllTranslation', this.lang);

  },

  mounted: function () {
    this.$router.push({ path: '/login' });
  },

  methods: {
    selectLang: function(lang) {
      this.lang = lang;
      this.$cookies.set('lang', lang);
      this.$store.commit('lang/setAllTranslation', lang);
    },
  },
}
</script>


<style scoped>
.main-background {
  width: 100%;
  height: 100%;
  /* background-attachment: scroll;
  background-repeat: no-repeat; */
  /* background-size: 100% 100%; */
  background: url("../../assets/img/bkg-img.jpg") center center no-repeat;
}

.main-background::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter:blur(5px);
}

.div-style {
  width: 100%;
  height: 80%;
  margin-bottom: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title-style {
  /* margin-left: 40%;
  padding-top: 40%; */
  width: 200px;
  height: 60px;
}

.header-translate {
  padding-top: 5%;
  padding-left: 80%;
}
</style>