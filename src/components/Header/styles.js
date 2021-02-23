import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles'

export const HeaderContent = styled.View.attrs({
  elevation: 1,
  shadowColor: '#666',
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowOpacity: 0.1,
  shadowRadius: 1.0
})`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px 0 10px;
  height: 55px;
  background-color: ${colors.primary2};
`

export const ButtonBack = styled.TouchableOpacity``
export const TextLogo = styled.Text`
  margin-left: 15px;
  color: #fff;
  font-size: ${fonts.input}px;
  font-family: ${fonts.fontBold};
`
