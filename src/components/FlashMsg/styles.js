import styled from 'styled-components/native'
import { fonts } from '../../assets/styles'
export const TextMessage = styled.Text`
  color: #fff;
  flex: 1;
  font-family: ${fonts.fontRegular};
`
export const FlashMsgContainer = styled.View`
  width: 100%;
  background-color: ${(props) =>
    props.type === 'success' ? '#5cb85c' : '#d9534f'};
  position: absolute;
  bottom: 0px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 0 0 10px;
`

export const CloseError = styled.TouchableOpacity`
  width: 70px;
  justify-content: center;
  align-items: center;
`

export const CloseErrorText = styled.Text`
  color: #fff;
  font-family: ${fonts.fontBold};
  text-align: center;
  align-self: center;
`
