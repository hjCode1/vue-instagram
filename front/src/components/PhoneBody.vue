<template>
  <div id="feed" v-dragscroll.y="true">
    <div v-if="step === 1">
      <VuePost v-for="(post, idx) in posts" :post="post" :key="idx" />
    </div>
    <div v-if="step === 2">
      <div
        class="selected_img"
        :class="selectedFilter"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div class="filter_wrap" v-dragscroll.x="true">
        <FilterType v-for="(filter, idx) in filters" :key="idx" :filter="filter" :image="image" />
      </div>
    </div>
    <div v-if="step === 3">
      <div
        class="selected_img"
        :class="selectedFilter"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div class="caption_container">
        <textarea
          :value="value"
          @input="$emit('input', $event.target.value)"
          class="caption_input"
          placeholder="Write a caption"
          type="text"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VuePost from "@/components/VuePost";
import FilterType from "@/components/FilterType";

export default {
  props: {
    step: Number,
    posts: Array,
    filters: Array,
    image: String,
    selectedFilter: String,
    value: String
  },
  data() {
    return {
      caption: ""
    };
  },
  components: {
    VuePost,
    FilterType
  }
};
</script>

<style scoped>
#feed {
  padding: 60px 0;
}
.selected_img {
  height: 400px;
  background-size: cover;
  background-position: center;
}
.filter_wrap {
  display: flex;
  padding-top: 60px;
  overflow-x: scroll;
}
.caption_input {
  display: block;
  margin: 15px auto;
  width: 90%;
  border: 0;
  resize: none;
  box-shadow: 0 0 5px #333;
}
</style>
