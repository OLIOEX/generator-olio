// @flow
import * as React from 'react'
import Element from 'Olio/App/Scenes/<%= sceneName %>/<%= sceneName %>'

type Props = {
  id: number,
};

export class <%= sceneName %> extends React.PureComponent<Props> {

  render(): React.Node {
    const { id } = this.props
    return (
      <Element
        id={id}
      />
    )
  }

}

export default <%= sceneName %>
