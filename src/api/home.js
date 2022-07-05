import request from '@/untils/request'

export const getImg = () => {
  return request({
    url: '/home/swiper'
  })
}
export const getNav = () => {
  return request({
    url: '/home/groups'
  })
}
