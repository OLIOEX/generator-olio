// @flow
import * as React from 'react'
import { Container, Text } from 'Olio/App/Components/<%= componentName %>/styles'

type Props = {
  id: number
}

export const <%= componentName %> = ({
  id
}: Props): React.Node => {
  return (
    <Container>
      <Text>
        {id}
      </Text>
    </Container>
  )
}

export default <%= componentName %>
