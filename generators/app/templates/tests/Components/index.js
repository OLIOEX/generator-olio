// @flow
import React from 'react'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import { fromJS } from 'immutable'
import { render } from '@testing-library/react-native'
import { <%= componentName %> } from 'Olio/App/Components/<%= componentName %>'

describe('<<%= componentName %>>', () => {
  const id = 1234
  let _props

  it('renders <<%= componentName %> /> getting id from redux', () => {
    const state = {
      account: fromJS({ id })
    }

    const testStore = createStore(state => state, state)

    const { getByText } = render(
      <Provider store={testStore}>
        <MyComponent {..._props} />
      </Provider>
    )

    const content = getByText(id.toString())
    expect(content).toBeDefined()
  })

})
