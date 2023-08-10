import React from 'react'
import Product from '../components/Product'

function Namelist() {
    const products=[
        {
            pid:1,
            pname:'Parle-G',
            weight:'100 GM',
            pprice:'10 Rs.'
        },
        {
            pid:2,
            pname:'Maggie',
            weight:'400 GM',
            pprice:'12 Rs.'
        },
        {
            pid:3,
            pname:'Dairy Milk',
            weight:'400 GM',
            pprice:'80 Rs.'

        }
    ]
    const productList = products.map(product => <Product key={[product.pid]} product={product}/>)
  return (
    <div>{productList}</div>
  )
}

export default Namelist