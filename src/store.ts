import {createStore} from 'vuex'
import { postsData, columnData, PostProps, ColumnProps } from './data/testData'
import axios from 'axios' 
interface userProp {
    id?: number;
    name?: string;
    isLogin: boolean
}
export interface storeProp {
    column: ColumnProps[];
    posts: PostProps[];
    user: userProp
}


const store = createStore<storeProp>({
    state: {
        column: [],
        posts: postsData,
        user: {isLogin: true, name: 'jth', id: 1}
    },
    mutations: {
        login(state) {
            state.user = {isLogin: true, name: 'jth'}
        },
        create(state, post: PostProps) {
            state.posts.push(post)
        },
        fetchColumn(state, rowData) {
            state.column = rowData.data
        },
        fetchColumnDetail(state, rowData) {
            state.column = [rowData.data]
        }
    },
    actions: {
        fetchColumn(context) {
            axios.get('/column/list').then(res => {
                // console.log(res.data.data)
                context.commit('fetchColumn', res.data)
            })
        },
        fetchColumnDetail({commit, state}, cid) {
            axios.get(`/column/${cid}`).then(res => {
                console.log(res)
                commit('fetchColumnDetail', res.data)
                console.log(state)
            })
        },
        // fetchPost({commit}) {
            //axios
        // }
    },
    getters: {
        getColumnById: (state) => {
            return function(id: number) {
                return state.column.find(c => c.id == id)
            }
        },
        getPostsByColumnId: (state) => (cid: number) => {
            return state.posts.filter(p => p.columnId == cid)
        }
    }
})
export default store