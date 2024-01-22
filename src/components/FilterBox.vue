<template>
  <div
    :class="`${필터명} filter-item`"
    :style="`background-image: url(${imageUrl})`"
  >
    {{ 필터명 }}
    <button @click="fire">버튼</button>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    imageUrl: String,
    필터명: String,
  },
  methods: {
    fire() {
      this.emitter.emit("filterName", this.필터명);
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
  text-align: center;
  font-weight: bold;
}
</style>
