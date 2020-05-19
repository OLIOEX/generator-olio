// @flow
import React from 'react'
import { shallow } from 'enzyme'
import <%= componentName %> from 'Olio/App/Components/<%= componentName %>/<%= componentName %>'
import { Label } from 'Olio/App/Components/<%= componentName %>/styles'

describe('<<%= componentName %> />', () => {
  let _props
  let _wrapper

  beforeEach(() => {
    _props = {}
    _wrapper = shallow(<<%= componentName %> {..._props} />)
  })

  it('renders a <Label />', () => {
    expect(_wrapper.type()).toEqual(Label)
  })

})
