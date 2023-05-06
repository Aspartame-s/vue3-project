const Mock = require('mockjs')
import table from './data/table'
​
Mock.mock('/table/getColumnList', 'post', table.getColumnList)
// Mock.mock('/table/update', 'post', table.update)
// Mock.mock('/table/delete', 'post', table.delete)
​
export default Mock