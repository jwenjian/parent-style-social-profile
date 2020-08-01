<template>
  <div class="flex-wrapper">
    <div class="banner">
    </div>
    <div class="avatar">
      <img src="/rose.jpeg" alt="" srcset="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'explore-page',
  data() {
    return {}
  }
}
</script>

<style>
.flex-wrapper {
width: min(100vh, 500px);
height: 100vh;
margin: auto auto;
background-color: aliceblue;
}

.banner {
  background-image: url('/banner.jpeg');
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

</style>