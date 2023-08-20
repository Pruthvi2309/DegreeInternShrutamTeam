import React from 'react'
import Product from './Product.jsx'
function NameList2()
{
    const products=[
        {
            pid:1,
            pname:'Pizza',
            weight:'400 gram',
            pprice:'199 Rs.'
        },
        {
            pid:2,
            pname:'Meggi',
            weight:'40 gram',
            pprice:'15 Rs.',
        },
        {
            pid:3,
            pname: 'Burger',
            weight: '35 gram',
            pprice: '25 Rs.'
        },
        {
            pid: 4,
            pname: 'Vadapav',
            weight: '150 gram',
            pprice: '20 Rs.'
        },
        {
            pid: 5,
            pname: 'Chinees',
            weight: '150 gram',
            pprice: '90 Rs.'
        }

    ]
    const productList=products.map(product => <Product key={[product.pid]} product={product}/>)
 return <div>{productList}</div>
}

export default NameList2
