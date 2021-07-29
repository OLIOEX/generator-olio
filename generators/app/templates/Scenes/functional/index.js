// @flow
import Element from 'Olio/App/Scenes/<%= sceneName %>/<%= sceneName %>'

type Props = {
  id: number,
}

const <%= sceneName %> = ({ id }: Props): React.Node => {
  const { id } = this.props
  return (
    <Element
        id={id}
      />
  )
}

export default <%= sceneName %>
