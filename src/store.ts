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
    // mutations: {
    //     add(state) {
    //         state.count++
    //     }
    // }
})
export default store