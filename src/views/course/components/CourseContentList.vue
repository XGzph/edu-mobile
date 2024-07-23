<template>
  <div class="course-content-list">
    <van-pull-refresh v-model="isRefreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item.id">
          <div>
            <img :src="item.courseImgUrl">
          </div>
          <div class="course-info">
            <h3 v-text="item.courseName"></h3>
            <p class="course-previews" v-html="item.previewFirstField"></p>
            <p class="price-container">
              <span class="course-discounts">￥{{ item.discounts }}</span>
              <s class="course-price">￥{{ item.price }}</s>
            </p>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getQueryCourses } from '@/services/course'
export default {
  name: 'course-content-list',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      currentPage: 1,
      isRefreshing: false
    }
  },
  methods: {
    async onRefresh () {
      this.currentPage = 1
      const { data } = await getQueryCourses({
        currentPage: this.currentPage,
        pageSize: 10,
        status: 1
      })
      if (data.data && data.data.records && data.data.records.length !== 0) {
        this.list = data.data.records
      }
      this.$toast('刷新成功')
      this.isRefreshing = false
    },
    async onLoad () {
      const { data } = await getQueryCourses({
        currentPage: this.currentPage,
        pageSize: 10,
        status: 1
      })
      console.log(data)
      if (data.data && data.data.records && data.data.records.length !== 0) {
        this.list.push(...data.data.records)
      }
      this.getQueryCourses++
      this.loading = false
      if (data.data.records.length < 10) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.course-content-list{
  position: fixed;
  overflow-y: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.van-cell__value{
  display: flex;
  height: 100px;
  padding: 10px 0;
}
.van-cell__value img{
  height: 100%;
  width: 90px;
  border-radius: 5px;
}
.course-info{
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 10px;
}
.course-info .course-preview{
  flex-grow: 1;
}
.course-info .course-discounts{
  color: #ff7452;
  margin-right: 8px;
}
p, h3{
  margin: 0;
}
</style>
