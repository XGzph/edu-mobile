<template>
  <div class="course-section">
    <h2 class="section" v-text="sectionData.sectionName"></h2>
    <p class="lesson" v-for="item in sectionData.courseLessons" :key="item.id">
      <span v-text="item.theme"></span>
      <van-ico name="play-circle" size="20" v-if="item.canPlay"></van-ico>
      <van-ico name="lock" size="20" v-else></van-ico>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CourseSection',
  props: {
    sectionData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.course-section {
  padding: 0 20px;
}
.lesson {
  display: flex;
  justify-content: space-between;
}
</style>
