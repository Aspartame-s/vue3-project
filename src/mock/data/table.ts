const Mock = require('mockjs')
const Random = Mock.Random

interface ColumnPorp {
    id: number;
    title: string;
    avatar?: string;
    desc: string;
}

const columnList: Array<ColumnPorp> = [];
for (let i = 0; i < 10; i++) {
    columnList.push({
        id: i,
        title: Random.ctitle(),
        desc: Random.cparagraph(),
    })
}

export default {
    getColumnList: (params: any) => {
        // const info = JSON.parse(params.body);
        // console.log(columnList)
        return columnList
    }
}