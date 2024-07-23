<template>
  <div class="course-content">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>图片一</van-swipe-item>
      <van-swipe-item>图片二</van-swipe-item>
      <van-swipe-item>图片三</van-swipe-item>
      <van-swipe-item>图片四</van-swipe-item>
    </van-swipe>
    <course-content-list>内容</course-content-list>
  </div>
</template>

<script>
import CourseContentList from './CourseContentList'
export default {
  name: 'course-content',
  components: {
    CourseContentList
  }
}
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.course-content-list{
  top: 200px;
  bottom: 50px;
}
</style>
