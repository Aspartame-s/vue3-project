export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    desc: string;
}
export interface PostProps {
    id: number;
    title: string;
    content: string;
    image?: string;
    createAt: string;
    columnId: number;
}

export const columnData: ColumnProps[] = [
    {
        id: 1,
        title: 'test1专栏',
        desc: '这是test1专栏，我是他的简介',
        avatar: 'http://dummyimage.com/100x100'

    },
    {
        id: 2,
        title: 'test2专栏',
        desc: '这是test2专栏，我是他的简介',
        avatar: 'http://dummyimage.com/100x100'
    },
    {
        id: 3,
        title: 'test3专栏',
        desc: '这是test3专栏，我是他的简介',
        avatar: 'http://dummyimage.com/100x100'

    },
    {
        id: 4,
        title: 'test4专栏',
        desc: '这是test4专栏，我是他的简介',
        avatar: 'http://dummyimage.com/100x100'

    }
]

export const postsData: PostProps[] = [
    {
        id: 1,
        title: '这是我的第一篇文章',
        content: '我是这篇文章的内容',
        image: 'http://dummyimage.com/100x100',
        createAt: '2023-4-20 07:42:32',
        columnId: 1
    },
    {
        id: 2,
        title: '这是我的第二篇文章',
        content: '我是这篇文章的内容',
        image: 'http://dummyimage.com/100x100',
        createAt: '2023-4-21 08:42:32',
        columnId: 1
    },
    {
        id: 3,
        title: '这是我的第三篇文章',
        content: '我是这篇文章的内容',
        image: 'http://dummyimage.com/100x100',
        createAt: '2023-4-22 09:42:32',
        columnId: 2
    },
    {
        id: 4,
        title: '这是我的第四篇文章',
        content: '我是这篇文章的内容',
        image: 'http://dummyimage.com/100x100',
        createAt: '2023-4-23 10:42:32',
        columnId: 3
    },
    {
        id: 5,
        title: '这是我的第五篇文章',
        content: '我是这篇文章的内容',
        image: 'http://dummyimage.com/100x100',
        createAt: '2023-4-24 11:42:32',
        columnId: 4
    },
]