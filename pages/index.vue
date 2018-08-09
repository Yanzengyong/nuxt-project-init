<template>
  <section class="container">
    <Logo />
    <h2 class="subtitle">
      ssr start
    </h2>
    <div
      @click="routerTest"
      class="btn">
      点击获取作者信息
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
  // 一个可以在组件渲染之前做异步操作的函数 可以看为是可以做异步操作的beforeRouteEnter
  asyncData (context) {
    // 制定错误类型，和错误提示
    // context.error({
    //   statusCode: 404,
    //   message: 'any error for message'
    // })
    // return {
    //   name: `我就是${context.store.state.DemoStore.loginData.name}`
    // }
    // 可以是异步操作，需返回promise
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(context.redirect('/tabChange'))
    //     resolve({name: '双击666'})
    //   }, 3000)
    // })
  },
  methods: {
    routerTest () {
      this.$Spin.show(this.renderLoadingFn())
      this.$store.dispatch('testRequest')
      .then((e) => {
        if (e && e.status === 200) {
          this.$Spin.hide()
          this.$router.push({path: 'authInfo'})
        }
      }, (error) => {
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1 && !error.config._retry) {
          // 我在这里重新请求
          this.$Spin.hide()
          this.$Message.error({
            content: '请求超时，请检查网络',
            duration: 0,
            closable: true
          })
        }
      })
    },
    renderLoadingFn () {
      return {
        render: (h) => {
          return h('div', [
            h('Icon', {
              'class': 'demo-spin-icon-load',
              props: {
                type: 'ios-loading',
                size: 30
              }
            }),
            h('div', {
              'class': 'login-loading-style'
            }, 'Login...')
          ])
        }
      }
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


