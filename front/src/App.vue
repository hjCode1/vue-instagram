<template>
  <div id="app">
    <PhoneHeader :step="step" :image="image" :selectedFilter="selectedFilter" v-model="caption" />
    <PhoneBody
      :step="step"
      :posts="posts"
      :filters="filters"
      :image="image"
      :selectedFilter="selectedFilter"
      v-model="caption"
    />
    <PhoneFooter />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PhoneHeader from "@/components/PhoneHeader";
import PhoneBody from "@/components/PhoneBody";
import PhoneFooter from "@/components/PhoneFooter";

export default {
  data() {
    return {
      caption: ""
    };
  },
  computed: {
    ...mapState(["step", "posts", "filters", "image", "selectedFilter"])
  },
  components: {
    PhoneHeader,
    PhoneBody,
    PhoneFooter
  }
};
</script>

<style>
</style>
