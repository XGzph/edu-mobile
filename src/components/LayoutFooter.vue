<template>
  <div class="layout-footer">
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页展示</van-tabbar-item>
      <van-tabbar-item to="/learn" icon="service-o">选课学习</van-tabbar-item>
      <van-tabbar-item to="/user" icon="friends-o">用户信息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'layout-footer'
}
</script>
<style lang="scss" scoped></style>
