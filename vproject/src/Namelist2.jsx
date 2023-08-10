import React from 'react'
import Product from './Product'
function Namelist2() {
    const products=[
        {
            pid:1,
            pname: 'Pizza',
            weight: '400 GM',
            pprice: '199 Rs.'
        },
        {
            pid:2,
            pname: 'Meggi',
            weight: '40 GM',
            pprice: '15 Rs.'
        },
        {
            pid:3,
            pname: 'Burger',
            weight: '50 GM',
            pprice: '25 Rs.'
        },
        {
            pid:4,
            pname: 'vadapav',
            weight: '35 GM',
            pprice: '20 Rs.'
        },
        {
            pid:5,
            pname: 'Chinees',
            weight: '150 GM',
            pprice: '90 Rs.'
        }
    ]
    const productList= products.map(product => <Product key={[product.pid]} product={product}/>)
  return (
    <div>
        {productList}
    </div>
  )
}

export default Namelist2