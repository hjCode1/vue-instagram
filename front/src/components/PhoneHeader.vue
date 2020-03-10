<template>
  <header id="header">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_gram_logo_cp.png" />
    <a class="btn_cancle" @click="goHome" v-if="step === 2 || step === 3">Cancle</a>
    <a class="btn_next" v-if="step === 2" @click="lastStep">Next</a>
    <a class="btn_share" v-if="step === 3" @click="sharePost({image,value,selectedFilter})">Share</a>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    step: Number,
    image: String,
    selectedFilter: String,
    value: String
  },
  methods: {
    ...mapActions(["goHome", "lastStep", "sharePost"])
  }
};
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  z-index: 10;
  background: #fafafa;
  width: 100%;
  height: 60px;
  text-align: center;
  box-shadow: 0 0 10px #333;
}
#header img {
  width: 130px;
}
#header > a {
  position: absolute;
  top: 16px;
  color: #0072ff;
  font-weight: bold;
}
.btn_cancle {
  left: 15px;
}
.btn_next,
.btn_share {
  right: 15px;
}
</style>