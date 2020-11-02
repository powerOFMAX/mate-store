import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'
import ProductList from '@components/ProductList/ProductList'
import IconHeader from '@components/IconHeader/IconHeader'
import Layout from '@components/Layout/Layout'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('/api/mate')
      .then((response) => response.json())
      .then(({ data }) => {
        setProductList(data)
      })
  }, [])

  return (
    <Layout>
      <IconHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
