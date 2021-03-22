import request from './request'
import request_two from './request_two'

export function getHomeData() {
  return request({
    url: "/home/multidata"
  })
}
export function getHomeGoods(type, page) {
  return request_two({
    url: "/home/data",
    params: {
      type, page
    }
  })
}