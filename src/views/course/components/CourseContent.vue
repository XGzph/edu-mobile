<template>
  <div class="course-content">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="orange">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <course-content-list
      :fetch-data="fetchData"
    ></course-content-list>
  </div>
</template>

<script>
import CourseContentList from '@/components/CourseContentList.vue'
import { getQueryCourses } from '@/services/course'
export default {
  name: 'course-content',
  components: {
    CourseContentList
  },
  methods: {
    fetchData (options) {
      return getQueryCourses(options)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: yellow;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: purple;
}
.course-content-list {
  top: 210px;
  bottom: 50px;
}
</style>
