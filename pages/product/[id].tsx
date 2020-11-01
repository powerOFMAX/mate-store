import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    if (id) {
      fetch(`/api/mate/${id}`)
        .then((response) => response.json())
        .then((product) => {
          console.log(product)
          setProduct(product)
        })
    }
  }, [id])

  return (
    <section>
      <h1>Página producto: {product?.name}</h1>
    </section>
  )
}

export default ProductPage
