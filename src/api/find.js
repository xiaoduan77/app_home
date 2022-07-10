import request from '@/untils/request'

export const getHouses = (q, start,
  end) => {
  return request({
    url: '/houses',
    params: {
      cityId: q,
      start,
      end
    }
  })
}
