<template>
  <footer id="footer">
    <div class="home_cta" @click="goHome">
      <i class="fas fa-home fa-lg"></i>
    </div>
    <div class="upload_cta">
      <input
        type="file"
        name="file"
        id="file"
        class="inputfile"
        @change="uploadImage"
        :disabled="step !== 1"
      />
      <label for="file">
        <i class="far fa-plus-square fa-lg"></i>
      </label>
    </div>
  </footer>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["step"])
  },
  methods: {
    ...mapActions(["goHome"]),
    uploadImage(e) {
      const files = e.target.files;
      if (!files.length) return;

      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = e => {
        this.$store.dispatch("uploadImage", e.target.result);
        this.$store.dispatch("nextStep");
      };
      document.querySelector("#file").value = "";
    }
  }
};
</script>

<style>
#footer {
  display: flex;
  position: fixed;
  bottom: 0;
  padding: 0 20px;
  width: 100%;
  background: #fafafa;
  height: 60px;
  align-items: center;
  box-shadow: 0 0 10px #333;
}
#footer > div {
  flex: 1;
}
#footer i {
  cursor: pointer;
}
.upload_cta {
  text-align: right;
}
#file {
  display: none;
}
</style>