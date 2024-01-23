<template>
  <button @click="$emit('updateStep', 0)">게시글보기</button>
  <button @click="$emit('updateStep', 1)">필터선택화면</button>
  <button @click="$emit('updateStep', 2)">글쓰기</button>

  <div v-if="step == 0">
    <div v-for="(post, i) in data" :key="i">
      <Post :인스타객체="post" :likesArrayNumber="i" />
    </div>
  </div>

  <!--필터 선택 페이지 -->
  <div v-if="step == 1">
    <div
      :class="`${filter} filter-item upload-image`"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="filters">
      <FilterBox
        :imageUrl="imageUrl"
        :필터명="필터명"
        v-for="(필터명, i) in filterName"
        :key="i"
      >
      </FilterBox>
    </div>
  </div>

  <!-- 글작성 페이지 -->
  <div v-if="step == 2">
    <div
      :class="`${filter} filter-item upload-image`"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="write">
      <textarea @input="writeContent" class="write-box">write!</textarea>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import filterName from "../assets/filtername.js";

export default {
  name: "Container",
  components: {
    Post: Post,
    FilterBox: FilterBox,
  },
  props: {
    data: Array,
    step: Number,
    imageUrl: String,
    filter: String,
  },
  data() {
    return {
      write: "",
      filterName: filterName,
    };
  },
  methods: {
    writeContent(event) {
      this.write = event.target.value;
      this.$emit("writeContent", this.write);
    },
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 500px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
