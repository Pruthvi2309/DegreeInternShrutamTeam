import React from 'react'

function Product(product) {
    return (
        <div>
            <h2>
                {product.product.pid},{product.product.pname},{product.product.weight},{product.product.pprice}
            </h2>
        </div>
     )
}

export default Product