import request from '@/untils/request'
import store from '@/store/index'
export const myMsg = () => {
  return request({
    url: 'user'
  })
}
export const myLike = () => {
  return request({
    url: '/user/favorites'
  })
}
