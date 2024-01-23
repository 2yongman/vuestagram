<template>
  <div class="post">
    <div class="post-header">
      <div
        :class="`profile`"
        :style="{ backgroundImage: `url(${인스타객체.userImage})` }"
      ></div>
      <span class="profile-name">{{ 인스타객체.name }}</span>
    </div>

    <div
      @click="increaseLikes"
      class="post-body"
      :class="`${인스타객체.filter}`"
      :style="{ backgroundImage: `url(${인스타객체.postImage})` }"
    ></div>

    <div class="post-content">
      <p>좋아요 수 : {{ $store.state.likes[likesArrayNumber] }}</p>
      <p>
        <strong>{{ 인스타객체.name }}</strong
        >{{ 인스타객체.content }}
      </p>
      <p class="date">{{ 인스타객체.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    인스타객체: Object,
    filter: String,
    likesArrayNumber: Number,
  },
  methods: {
    increaseLikes() {
      this.$store.commit("좋아요증가", this.likesArrayNumber);
    },
  },
};
</script>

<style>
.post {
  width: 100%;
}

.profile {
  /* background-image: url("https://picsum.photos/100?random=0"); */
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}

.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}

.post-header {
  height: 30px;
  padding: 10px;
}

.post-body {
  /* background-image: url("https://picsum.photos/600?random=0"); */
  height: 450px;
  background-position: center;
  background-size: cover;
}

.post-content {
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}

.date {
  font-size: 11px;
  color: gray;
  margin-top: -8px;
}
</style>
