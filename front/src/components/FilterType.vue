<template>
  <div class="filter">
    <p>{{filter.name}}</p>
    <div
      class="img"
      @click="selectFilter(filter.name)"
      :class="filter.name"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    ></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    filter: Object,
    image: String
  },
  methods: {
    ...mapActions(["selectFilter"])
  }
};
</script>

<style scoped>
.filter {
  flex: 1;
  min-width: 200px;
  margin: 0 5px;
  text-align: center;
}
.img {
  height: 150px;
  background-size: cover;
  background-position: center;
}
</style>