import request from '@/untils/request'

export const getHouseCity = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
