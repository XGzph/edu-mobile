<template>
  <div class="course-header">
    <van-image :src="require('@/assets/logo.png')"></van-image>
  </div>
</template>

<script>
export default {
  name: 'course-header'
}
</script>

<style lang="scss" scoped>
.course-header{
  height: 50px;
}
.van-image{
  width: 180px;
  margin-left: -20px;
}
</style>
