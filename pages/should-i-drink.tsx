import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { Header, Button } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

type YesOrNoApiResponse = {
  data: 'yes' | 'Of course'
}

const fetchResult = async () => {
  const res = await fetch('/api/shouldDrink')
  const { data }: YesOrNoApiResponse = await res.json()

  return data
}

const YesOrNo = ({ initialResult }: { initialResult: string }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(initialResult)
  const [triggerCount, setTriggerCount] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    fetchResult().then((initialResult) => {
      setResult(initialResult)
      setIsLoading(false)
    })
  }, [triggerCount])

  const onClick = async () => {
    setTriggerCount(triggerCount + 1)
  }

  return (
    <Layout>
      <div>
        <Header as="h1" color={isLoading ? 'grey' : 'green'}>
          {result}
        </Header>

        <p>
          <Button
            color="green"
            onClick={onClick}
            loading={isLoading}
            disabled={isLoading}
          >
            Try again
          </Button>
        </p>
        <p>
          <Link href="/">
            <a className="ui black button basic">Go back</a>
          </Link>
        </p>
      </div>

      <style jsx>{`
        div {
          text-align: center;
        }
        div :global(h1.header) {
          font-size: 7rem;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}

export default YesOrNo
