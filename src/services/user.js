import request from '@/utils/request'

export const login = data => {
  return request({
    method: 'POST',
    url: '/front/user/login',
    data: new URLSearchParams(data).toString()
  })
}
