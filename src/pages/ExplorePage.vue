<template>
  <div class="flex-wrapper">
    <div class="banner"></div>
    <div class="avatar">
      <img src="/rose.jpeg" alt srcset />
      <h2 id="nickname">{{ nickname }}</h2>
      <div id="bio">家有俩宝，平安是福！</div>
    </div>
    <div class="divider">
      <p>
        <img class="hr-span" /> 朋友仅展示最近一个月的朋友圈
        <img class="hr-span" />
      </p>
    </div>

    <div class="btn-wrapper">
      <el-button type="success" @click="randomNext" icon="el-icon-refresh-left">换一个昵称</el-button>
    </div>

    <div class="info">
      <hr>
      <p>昵称数据来源于 <a href="https://www.bilibili.com/video/BV14z4y1d7n3" target="_blank" rel="noopener noreferrer">酒醉的蝴蝶视频弹幕</a></p>
      <p>图片来自 <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash.com</a></p>
      <p>代码托管在 <a href="https://github.com/jwenjian/parent-style-social-profile" target="_blank" rel="noopener noreferrer">Github</a> </p>
    </div>
  </div>
</template>

<script>
const all_names = require("../assets/names.json");

export default {
  name: "explore-page",
  data() {
    return {
      nickname: "平安是福",
      names: [],
    };
  },
  methods: {
    randomNext() {
      let stop = false;
      let idx = 0;
      let new_nickname = "";
      while (!stop) {
        idx = Math.floor(Math.random() * this.names.length);
        new_nickname = this.names[idx];
        stop = this.nickname !== new_nickname;
      }

      this.nickname = new_nickname;
    },
  },
  mounted() {
    this.names = all_names;
  },
};
</script>

<style>
.flex-wrapper {
  width: min(100vh, 500px);
  height: 100vh;
  margin: auto auto;
  background-color: white;
}

.banner {
  background-image: url("/banner.jpeg");
  height: 40vh;
  background-size: cover;
}

.avatar > img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  float: right;
  margin-top: -70px;
  margin-right: 10px;
}

#nickname {
  float: right;
  margin-top: -50px;
  margin-right: 1em;
  color: white;
  letter-spacing: 0.1em;
}

#bio {
  padding-top: 40px;
  text-align: right;
  color: #757474;
}

.divider {
  margin-top: 100px;
  text-align: center;
  color: #757474;
  font-size: x-small;
}

.hr-span {
  border-top: 1px solid #ded5d5;
  margin-right: 1em;
  margin-left: 1em;
  width: 2em;
  vertical-align: middle;
  display: inline;
}

.btn-wrapper {
  margin-top: 3em;
  text-align: center;
}

.info {
  margin-top: 10vh;
  padding-left: 2em;
  text-align: left;
  font-size: xx-small;
  color: #757474;
}
</style>