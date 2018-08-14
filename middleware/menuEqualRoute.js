export default (context) => {
  switch (context.route && context.route.name) {
    case 'index': context.store.state.DemoStore.menuSelectName = '第一导航-用户信息'
      break
    case 'tabChange': context.store.state.DemoStore.menuSelectName = '第一导航-Store操作'
      break
    case 'testPage': context.store.state.DemoStore.menuSelectName = '第一导航-左右切换效果'
      break
  }
}
