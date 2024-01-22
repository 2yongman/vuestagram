<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancle</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    @updateStep="
      {
        step = $event;
      }
    "
    @writeContent="
      {
        입력한글 = $event;
      }
    "
    :data="data"
    :step="step"
    :imageUrl="imageUrl"
    :filter="filter"
  />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import data from "./data.js";
import axios from "axios";

export default {
  name: "App",
  components: {
    Container: Container,
  },
  mounted() {
    this.emitter.on("filterName", (filterName) => {
      this.filter = filterName;
    });
  },

  data() {
    return {
      data: data,
      더보기: 0,
      step: 0,
      imageUrl: "",
      입력한글: "",
      filter: "",
    };
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
        .then((result) => {
          this.data.push(result.data);
          this.더보기++;
        });
    },
    upload(e) {
      let file = e.target.files;
      let url = URL.createObjectURL(file[0]); // 이미지의 임시 url, 브라우저 끄면 사라짐
      // let replaceUrl = url.replace("blob:", ""); <- blob 삭제해줄 필요 없음
      // console.log(replaceUrl);
      this.step = 1;
      this.imageUrl = url;
    },
    publish() {
      console.log(this.내게시물);
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.imageUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.입력한글,
        filter: this.filter,
      };
      this.data.unshift(내게시물); //unshift 배열 맨 앞에 넣어줌
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}
</style>
