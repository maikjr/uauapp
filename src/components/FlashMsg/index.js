import React from 'react'

import {
  FlashMsgContainer,
  TextMessage,
  CloseError,
  CloseErrorText
} from './styles'

export default function FlashMsg ({ type, msg, close }) {
  return (
    <FlashMsgContainer type={type}>
      <TextMessage>{msg}</TextMessage>
      <CloseError onPress={close}>
        <CloseErrorText>Fechar</CloseErrorText>
      </CloseError>
    </FlashMsgContainer>
  )
}
