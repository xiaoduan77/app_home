import request from '@/untils/request'

export const MyHouse = () => {
  return request({
    url: '/user/houses'
  })
}
