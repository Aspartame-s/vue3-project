const Mock = require('mockjs')
import {getColumnList} from './data/table'
​
Mock.mock('/table/getColumnList', 'post', getColumnList())
// Mock.mock('/table/update', 'post', table.update)
// Mock.mock('/table/delete', 'post', table.delete)
​
export default Mock