import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: []
  },
  mutations: {
    // addCart(state, product) {
    //   const oldproduct = state.cartList.find((item) => {
    //     return item.iid === product.iid
    //   })
    //   if (oldproduct) {
    //     oldproduct.count++
    //   }
    //   else {
    //     product.count = 1
    //     state.cartList.push(product)
    //   }
    // }
    addMore(state, payload) {
      payload.count++
    },
    pushNew(state, payload) {
      payload.count = 1
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, product) {
      return new Promise((resolve, reject) => {
        const oldproduct = context.state.cartList.find((item) => {
          return item.iid === product.iid
        })
        if (oldproduct) {
          context.commit('addMore', oldproduct)
          resolve('商品数量+1')
        }
        else {
          context.commit('pushNew', product)
          resolve('添加新商品')
        }
      })
    }
  },
  modules: {
  }
})
