// @flow
import Element from 'Olio/App/Components/<%= componentName %>/<%= componentName %>'
import useSelector from 'Olio/App/Utils/useSelector'

const <%= componentName %> = ({}: Props): React.Node => {
  const id: number = useSelector(state => state.account.get('id'))

  return (
    <Element
      id={id}
    />
  )
}

export default <%= componentName %>
