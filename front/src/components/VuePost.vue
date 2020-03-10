<template>
  <div class="vuegram-post">
    <div class="header level">
      <div class="level-left">
        <figure class="image is-32x32">
          <img :src="post.userImage" />
        </figure>
        <span class="username">{{post.username}}</span>
      </div>
    </div>
    <div
      class="image-container"
      :class="post.filter"
      :style="{ backgroundImage: 'url(' + post.postImage + ')' }"
      @dblclick="like"
    ></div>
    <div class="content">
      <div class="heart">
        <i class="far fa-heart fa-lg" @click="like" :class="{'on fas' : this.post.hasBeenLiked}"></i>
      </div>
      <p class="likes">{{post.likes}} likes</p>
      <p class="caption">{{post.caption}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  },
  methods: {
    like() {
      this.post.hasBeenLiked ? this.post.likes-- : this.post.likes++;
      this.post.hasBeenLiked = !this.post.hasBeenLiked;
    }
  }
};
</script>

<style scoped>
.header {
  margin: 0;
  padding: 10px 15px;
}
.level-left {
  display: flex;
}
.level-left .image {
  border-radius: 50%;
  overflow: hidden;
}
.level-left .username {
  padding-left: 10px;
  font-size: 14px;
}
.image-container {
  height: 450px;
  background-size: cover;
  background-position: center;
}
.content {
  padding: 10px 15px;
}
.content .likes {
  font-weight: bold;
}
.content .heart {
  cursor: pointer;
}
.content .heart .on {
  color: red;
}
</style>