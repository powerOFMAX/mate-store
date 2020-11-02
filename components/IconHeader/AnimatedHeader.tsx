import React from 'react'
import { Header, Transition } from 'semantic-ui-react'
import { Mate } from '@components/SVGIcons'

type AnimatedHeaderProps = {
  visible: boolean
  onClick: () => void
  onComplete: () => void
}

const AnimatedHeader = ({
  visible,
  onClick,
  onComplete,
}: AnimatedHeaderProps) => (
  <Header size="huge" as="h1" onClick={onClick}>
    Maxi
    <Transition
      animation="jiggle"
      visible={visible}
      duration={900}
      onComplete={onComplete}
    >
      <Mate size="58px" />
    </Transition>
    Store
  </Header>
)

export default AnimatedHeader
