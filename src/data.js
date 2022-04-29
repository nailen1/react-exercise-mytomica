import fxx from './tomica-ferrari-fxx-01.jpeg';
import pajero from './tomica-pajero-01.jpeg';
import countach from './tomica-lambo-countach-01.jpeg';
import civic from './tomica-civic-01.jpeg';
import mustang from './tomica-mustang-01.png'

export default [
    {
        id: 0,
        title: '페라리-FXX',
        content: '이탈리아',
        price: '10억',
        thumbnail: fxx,
        clr: 'red',
        detail: '/detail/1'
    },
    {
        id: 1,
        title: '미츠비시-PAJERO',
        content: '일본',
        price: '1억',
        thumbnail: pajero,
        clr: 'blue',
        page: '/detail/0'
    },
    {
        id: 2,
        title: '람보르기니-CT',
        content: '이탈리아',
        price: '6억',
        thumbnail: countach,
        clr: 'crimson',
        page: '/detail/1'

    },
    {
        id: 3,
        title: '혼다-CIVIC R',
        content: '일본',
        price: '2000만원',
        thumbnail: civic,
        clr: 'red',
        page: '/detail/2'

    },
    {
        id: 4,
        title: '포드-MUSTANG',
        content: '미국',
        price: '8000만원',
        thumbnail: mustang,
        clr: 'red',
        page: '/detail/3'

    },
]