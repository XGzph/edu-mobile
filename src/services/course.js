import request from '@/utils/request'

export const getAllAds = params => {
  return request({
    method: 'GET',
    url: '/front/ad/getAllAds',
    params
  })
}

export const getQueryCourses = data => {
  return request({
    method: 'POST',
    url: '/boss/course/getQueryCourses',
    data
  })
}

export const getPurchaseCourse = () => {
  return request({
    method: 'GET',
    url: '/front/course/getPurchaseCourse'
  })
}
