<template>
  <div class="course">
    <course-header></course-header>
    <course-content></course-content>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import CourseHeader from './components/CourseHeader.vue'
import CourseContent from './components/CourseContent.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'

export default {
  name: 'index-course',
  components: {
    CourseContent,
    CourseHeader,
    LayoutFooter
  }
}
</script>

<style lang="scss" scoped></style>
