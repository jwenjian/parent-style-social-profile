<template>
  <div class="welcome-wrapper">
    <div>
      <span class="title">欢迎来到</span>
    </div>
    <div ref="ref-0">
      <h3>Parent style(家长风格)微信昵称集散地</h3>
    </div>
    <div ref="ref-2"><el-button :type="btnType" @click="nextAnimation">开始探索 -> </el-button>
    </div>
    <div class="hidden tips" ref="ref-3">他（她）们也曾年轻过</div>
    <div class="hidden tips" ref="ref-4">热血过</div>
    <div class="hidden tips" ref="ref-5">浪漫过</div>
    <div class="hidden tips" ref="ref-6">只是后来时光慢慢磨平了岁月的棱角</div>
    <div class="hidden tips" ref="ref-7">琐碎的生活点滴成为了他们生活的全部</div>
    <div class="hidden tips" ref="ref-8">“相识是缘”，“平安一生”</div>
    <div class="hidden tips" ref="ref-9" >这些看似 [俗气] 的微信昵称</div>
    <div class="hidden tips" ref="ref-10">却正是他们饱经岁月洗礼的最好证据</div>
    <div class="hidden tips" ref="ref-11">现在，再点击一次</div>
    <div class="hidden tips" ref="ref-12">探索属于你的中老年昵称, Go!</div>
  </div>
</template>

<script>
const max_ref = 12;

export default {
  name: 'welcome-page',
  data() {
    return {
      btnType: 'info',
      ref: 2
    }
  },
  methods: {
    nextAnimation() {
      if (this.ref >= max_ref) {
        this.$router.push('/explore')
        return;
      }
      this.ref = this.ref + 1;
      this.$refs[`ref-${this.ref}`].classList.add('show', 'animate__animated', 'animate__backInUp')
      if (this.ref == max_ref) {
        this.btnType = 'success';
      } else {
        this.btnType = 'info'
      }
    }
  },
  mounted() {
    this.$refs['ref-2'].classList.add('animate__animated', 'animate__tada', 'animate__infinite')
  }
}
</script>

<style>
.title {
  display: block;
  font-size: 2em;
  font-weight: bolder;
  padding-top: 2em;
}
.welcome-wrapper {
  display: block;
  text-align: center;
}
.hidden {
  display: none;
}
.show {
  display: block;
}
.tips {
  letter-spacing: 0.1em;
  margin-top: 0.5em;
}
</style>