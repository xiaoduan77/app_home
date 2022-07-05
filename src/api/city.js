import request from '@/untils/request'

export const getCity = (q) => {
  return request({
    url: '/area/city',
    params: {
      level: q
    }
  })
}

// 获取热门城市
export const getHotCity = () => {
  return request({
    url: '/area/hot'
  })
}

// 获取房源信息
export const getCityMsg = (n) => {
  return request({
    url: '/area/info',
    params: {
      name: n
    }
  })
}
