// @flow
import React from 'react'
import { shallow } from 'enzyme'
import { <%= componentName %> } from 'Olio/App/Components/<%= componentName %>'
import Element from 'Olio/App/Components/<%= componentName %>/<%= componentName %>'

describe('<<%= componentName %>>', () => {
  const id = 1
  let _props
  let _wrapper

  beforeEach(() => {
    _props = {
      id
    }
    _wrapper = shallow(<<%= componentName %> {..._props} />)
  })

  it('renders <<%= componentName %> />', () => {
    expect(_wrapper.type()).toEqual(Element)
  })

  it('passes down the props', () => {
    expect(_wrapper.prop('id')).toEqual(id)
  })

})
