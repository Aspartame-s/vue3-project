import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
    require ('./mock.ts')
}
axios.get('/mock/news').then(res => { // url即在mock.js中定义的
    console.log(res.data) // 打印一下响应数据
})
// axios.get('http://apis.imooc.com/api/columns?icode=123').then(res => {
//     console.log(res)
// })


const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
