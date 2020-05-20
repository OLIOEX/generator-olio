// @flow
import React from 'react'
import { shallow } from 'enzyme'
import <%= sceneName %> from 'Olio/App/Scenes/<%= sceneName %>/<%= sceneName %>'
import Text from 'Olio/App/Components/Text'

describe('<<%= sceneName %> />', () => {
  let _props
  let _wrapper

  beforeEach(() => {
    _props = {}
    _wrapper = shallow(<<%= sceneName %> {..._props} />)
  })

  it('renders a <Text />', () => {
    expect(_wrapper.type()).toEqual(Text)
    fail('Epic fail')
  })

})
