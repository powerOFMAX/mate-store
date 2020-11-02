import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { Mate } from '@components/SVGIcons'

export const ModalHeaderContent = () => {
  return (
    <div className="container">
      <Grid columns={2}>
        <Grid.Row verticalAlign={'middle'}>
          <Grid.Column width="5">
            <Mate size="154px" />
          </Grid.Column>
          <Grid.Column width="11">
            <Header as="h2">You drank all the Mate!</Header>
            <p> You should refill it</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <style jsx>{`
        .container {
          padding: 2rem;
        }
      `}</style>
    </div>
  )
}

export default ModalHeaderContent
