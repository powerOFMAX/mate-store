import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'
import ProductList from '@components/ProductList/ProductList'
import IconHeader from '@components/IconHeader/IconHeader'
import Layout from '@components/Layout/Layout'
import Link from 'next/link'

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
      <section>
        <Link href="/should-i-drink">
          <a>Should I drink mate today?</a>
        </Link>
      </section>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
