import request_detail from './request_detail'
import request_two from './request_two'

export function getGoodsDetail(iid) {
  return request_detail({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request_two({
    url: '/recommend',
  })
}

//商品基本信息
export class Goods {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = shopInfo.services;
  }
}

//商铺信息
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}

//参数信息
export class Param {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule.tables;
  }
}