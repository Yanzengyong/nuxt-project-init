<template>
  <div>
    <h3>name: {{ authInfo.name }}</h3>
    <h3>age: {{ authInfo.age }}</h3>
    <h3>sex: {{ authInfo.sex }}</h3>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Auth Info'
    }
  },
  data () {
    return {
      authInfo: this.$store.state.DemoStore.testData
    }
  },
  created () {
    console.log(this.$store.state.DemoStore.testData)
  }
}
</script>

<style lang="scss" scoped>

</style>
