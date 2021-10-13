<template>
  <el-upload class="upload-demo" drag action="null" :on-change="uploadChange" :auto-upload="false">
    <div v-if="imgUrl === ''">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Drop file here or
        <em>click to upload</em>
      </div>
    </div>
    <div v-else>
      <el-image :src="imgUrl"></el-image>
    </div>
  </el-upload>
</template>

<script>
import { getAxios } from "../../assets/getaxios";
export default {
  data: function () {
    return {
      imgUrl: '',
      lang: '',
      tokenid: '',
      filepath: '',
    }
  },

  watch: {
    imgUrl: {
      deep: true,
      immediate: true,
      handler: function (n, o) { },
    },
  },

  methods: {
    getfilepath: function(){
      this.$emit('getfilepath', this.filepath);
    },
    uploadChange: function (file, filelist) {
      this.imgUrl = window.URL.createObjectURL(file.raw);
      let self = this;
      let params = new FormData();
      params.append('type', 'kyc');
      params.append('file', file.raw);

      getAxios('http://api.1xch.one/index.php?c=common&a=upload_pic', 'post', params).then(response => {
        let resp = response.data;
        if (resp.code !== 0) {
          console.log('resp error is', resp);
          self.$notify.error({
            title: resp.msg,
            message: resp.msg,
          });
          return
        }
        self.$notify.success({
          title: 'Success!!!',
          message: resp.msg,
        });
        self.filepath = resp.filepath;
        self.getfilepath();
      }).catch(error => {
        console.log('error is', error);
        self.$notify.error({
          title: error,
          message: error,
        });
      })
    },
  },
}
</script>

<style scoped>
</style>