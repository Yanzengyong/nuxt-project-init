<template>
  <div class="container">
    <Layout class="ivu-layout">
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          active-name="1">
          <div class="layout-logo" />
          <div class="layout-nav">
            哈哈哈
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider
          hide-trigger
          :style="{background: '#fff'}">
          <Menu
            :active-name="$store.state.DemoStore.menuSelectName"
            theme="light"
            width="auto"
            accordion
            @on-select='menuSelect'
            :open-names="[menuItems[0].name]">
            <Submenu
              v-for="(item, index) in menuItems"
              :key="index"
              :name="item.name">
              <template slot="title">
                <Icon type="ios-navigate" />
                {{ item.name }}
              </template>
              <MenuItem
                v-for="(ite, ind) in item.children"
                :key="ind"
                :name="item.name + '-' + ite.name">
              {{ ite.name }}
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem
              v-for="(item, index) in $store.state.DemoStore.menuSelectName.split('-')"
              :key="index"
            >{{ item }}</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <nuxt />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {name: '第一导航', children: [{name: '用户信息'}, {name: 'Store操作'}, {name: '左右切换效果'}]},
        {name: '第二导航', children: [{name: 'mark6'}, {name: 'mark7'}, {name: 'mark45'}]},
        {name: '第三导航', children: [{name: 'mark50'}, {name: '奇异博士'}, {name: '反浩克2.0'}]}
      ]
    }
  },
  asyncData (context) {

  },
  created () {

  },
  methods: {
    menuSelect (name) {
      // 设置 当前所在位置 的名称
      switch (name) {
        case '第一导航-用户信息': this.$router.push({path: '/'})
          break
        case '第一导航-Store操作': this.$router.push({path: '/tabChange'})
          break
        case '第一导航-左右切换效果': this.$router.push({path: '/testPage'})
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100vh;
  .ivu-layout{
    height: 100%;
  }
}
</style>

