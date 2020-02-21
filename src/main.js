import Vue from 'vue'
import App from './App'
// 导入封装好的基础地址模块
import request from "@/utils/request"

// 调用requerst 函数
const plugin = request({
  baseURL :'https://api-ugo-web.itheima.net'
})
Vue.use(plugin)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
