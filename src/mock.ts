const Mock = require('mockjs')
const Random = Mock.Random
export interface columnList {
    id: number;
    title: string;
    content: string;
    createAt: string;
}
const produceNewsData = function (): Array<columnList> {
    const newsList = []
    for (let i = 0; i < 20; i++) {
        const newNewsObject: columnList = {
            id: i,
            title: Random.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
            content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
            createAt: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
        }
        newsList.push(newNewsObject)
    }
    return newsList
}
Mock.mock('/mock/news', produceNewsData)