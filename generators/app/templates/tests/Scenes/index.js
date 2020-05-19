// @flow
import React from 'react'
import { shallow } from 'enzyme'
import { <%= sceneName %> } from 'Olio/App/Scenes/<%= sceneName %>'
import Element from 'Olio/App/Scenes/<%= sceneName %>/<%= sceneName %>'

describe('<<%= sceneName %>>', () => {
  const id = 1
  let _props
  let _wrapper

  beforeEach(() => {
    _props = {
      id
    }
    _wrapper = shallow(<<%= sceneName %> {..._props} />)
  })

  it('renders <<%= sceneName %> />', () => {
    expect(_wrapper.type()).toEqual(Element)
  })

  it('passes down the props', () => {
    expect(_wrapper.prop('id')).toEqual(id)
  })

})
