// @flow
import * as React from 'react'
import Element from 'Olio/App/Components/<%= componentName %>/<%= componentName %>'
import mapStateToProps from './mapStateToProps'
import connect from 'Olio/App/Utils/connect'

type Props = {
  id: number,
};

export class <%= componentName %> extends React.PureComponent<Props> {

  render(): React.Node {
    const { id } = this.props
    return (
      <Element
        id={id}
      />
    )
  }

}

export default connect(mapStateToProps)(<%= componentName %>)
