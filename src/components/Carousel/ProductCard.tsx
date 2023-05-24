import { Button } from '@material-ui/core'
import React from 'react'
import { Product } from 'types/Poduct'

export default function ProductCard(product:Product) {
  return (
    <div style={{ border: "2px solid #e9eaed", width:'150px', padding:'10px', margin:'0 auto' }}>
      <img src={product.photoUrlSmall} alt={product.name} height={150} />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <Button style={{width:'100%'}}>
        Add to cart
      </Button>
    </div>
  )
}
