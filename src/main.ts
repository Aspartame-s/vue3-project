import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
    require ('./mock/index.ts')
}

axios.post('/table/getColumnList').then(res => {
    console.log(res)
})

// axios.post('/mock/addNews', {
//     id: 30,
//     name: 'nihao'
// })

// axios.get('http://apis.imooc.com/api/columns?icode=123').then(res => {
//     console.log(res)
// })


const app = createApp(App)
app.use(router)
app.use(store) 
app.mount('#app')
