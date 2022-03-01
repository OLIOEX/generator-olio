// @flow
import * as React from 'react'
import { useSelector } from 'react-redux'
import Element from 'Olio/App/Components/<%= componentName %>/<%= componentName %>'

type Props = {}

export const <%= componentName %> = ({}: Props): React.Node => {
  const id: number = useSelector(state => state.account.get('id'))

  return (
    <Element
      id={id}
    />
  )
}

export default <%= componentName %>
