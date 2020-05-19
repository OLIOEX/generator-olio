// @flow
import mapStateToProps from 'Olio/App/Components/<%= componentName %>/mapStateToProps'
import { fromJS } from 'immutable'

describe('<<%= componentName %> /> mapStateToProps', () => {

  it('maps loaded data as expected', () => {
    const state = {
      account: fromJS({}),
    }

    const props = mapStateToProps(state, {})
    expect(props).toEqual({})
  })
})
