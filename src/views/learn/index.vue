<template>
  <div class="learn">
    <van-nav-bar title="已购课程" />
    <course-content-list
      :fetch-data="fetchData"
    ></course-content-list>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from '@/components/LayoutFooter.vue'
import CourseContentList from '@/components/CourseContentList.vue'
import { getPurchaseCourse } from '@/services/course'
export default {
  name: 'learn-index',
  components: {
    CourseContentList,
    LayoutFooter
  },
  methods: {
    fetchData () {
      return getPurchaseCourse()
    }
  }
}
</script>

<style lang="scss" scoped>
.course-content-list{
  top: 50px;
  bottom: 50px;
}
</style>
