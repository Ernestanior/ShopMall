//以下为vue2.0版本
import Toast from './Toast.vue'

const obj = {}
obj.install = (Vue) => {
  console.log(Vue);
  // 1. 用extends创建Toast组件构造器
  // 之后根据该构造器new出来的实例都会按照Toast组件的模板来设计
  const ToastConstrutor = Vue.extend(Toast)

  //2. 根据构造器new一个toast实例
  const newToast = new ToastConstrutor()

  //3. 把实例挂载到dom里的某个元素上，可以是标签元素，class元素,id元素
  // newToast.$mount('#app')

  // 4.如果没有这个元素，可以createElement生成一个新元素
  // 然后把这个新元素添加到body里
  newToast.$mount(document.createElement('div'))
  document.body.appendChild(newToast.$el)

  // 5.在prototype全局中添加$toast属性
  Vue.prototype.$toast = Toast
}
export default obj