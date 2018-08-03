<template>
  <section class="container">
    <Logo />
    <h2 class="subtitle">
      ssr start
    </h2>
    <div
      @click="routerTest"
      class="btn">
      我是一个按钮
    </div>
  </section>
</template>

<script>
import Logo from 'appLogo'
export default {
  head () {
    return {
      title: 'hello world'
    }
  },
  components: {
    Logo
  },
  created () {

  },
  methods: {
    routerTest () {
      this.$router.push({path: 'demo'})
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .btn{
    width: 70%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #6c9bce;
    font-size: 16px;
  }
}
</style>


