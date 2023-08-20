import React from 'react'

function Product(product) {
  return (
    <div>
        <h3>
            {product.product.pid}: {product.product.pname}: {product.product.weight}:{product.product.pprice}
        </h3>
    </div>
  )
}
export default Product