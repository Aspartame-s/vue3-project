import {createStore} from 'vuex'
import { postsData, columnData, PostProps, ColumnProps } from './data/testData'
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
        column: columnData,
        posts: postsData,
        user: {isLogin: false}
    },
    mutations: {
        login(state) {
            state.user = {isLogin: true, name: 'jth'}
        }
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