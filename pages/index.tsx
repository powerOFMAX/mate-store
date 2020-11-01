import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'

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
    <div>
      <div>Mate list!</div>
      {productList.map((item) => {
        return <div>{item.image}</div>
      })}
    </div>
  )
}

export default HomePage
