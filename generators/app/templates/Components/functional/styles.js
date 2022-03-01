// @flow
import * as React from 'react'
import styled from 'styled-components/native'
import variables from 'Olio/App/Styles/Variables'
import type { ViewType, TextType } from 'Olio/App/Types/components'

export const Container: React.ComponentType<ViewType> = styled.View`
  color: ${variables.colors.white};
`

export const Text: React.ComponentType<TextType> = styled.Text``
