const Mock = require('mockjs')
const Random = Mock.Random

interface ColumnPorp {
    id: number;
    title: string;
    avatar?: string;
    desc: string;
}

const columnList: Array<ColumnPorp> = Mock.mock({
    'columnList|10': [
        {
            id: '@increment',
            title: '@ctitle()',
            desc: '@cparagraph()'
        }
    ]
})
// columnList = Mock.mock({

// })
// for (let i = 0; i < 10; i++) {
//     columnList.push({
//         id: i,
//         title: Random.ctitle(),
//         desc: Random.cparagraph(),
//     })
// }

interface paramProp {
    current: number;
    size: number;
}

export const getColumnList = (params?: paramProp) => {
    // const info = JSON.parse(params.body);
    // console.log(columnList)
    return {
        code: 200,
        success: true,
        message: '获取专题列表成功',
        data: columnList,
        totalPage: columnList.length
    }
}

// export const addColumn = (data: any) => {
    
// }