import styled from 'styled-components/native'
import { colors, fonts } from '../../../assets/styles'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bg};
`
export const Content = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`
export const Logo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 140px;
  margin-bottom: 20px;
  align-self: center;
`
export const Description = styled.Text`
  font-family: ${fonts.fontRegular};
  font-size: 35px;
  letter-spacing: -1px;
  color: #fff;
  line-height: 42px;
`
export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px 0 10px;
  height: 55px;
`

export const ButtonBack = styled.TouchableOpacity``
export const TextLogo = styled.Text`
  margin-left: 15px;
  color: ${colors.light};
  font-size: ${fonts.input}px;
  font-family: ${fonts.fontBold};
`
export const InputSection = styled.View`
  background-color: #fff;
  border-color: #fff;
  border-width: 1px;
  margin: 5px 0;
  flex-direction: row;
  align-items: center;
  border-radius: 3px;
  padding: 5px 10px;
`
export const Input = styled.TextInput`
  font-family: ${fonts.fontRegular};
  font-size: 15px;
  flex: 1;
  color: ${colors.light};
  margin-left: 10px;
`
export const Button = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: 25px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`
export const ButtonText = styled.Text`
  font-family: ${fonts.fontMedium};
  color: #fff;
  font-size: 12px;
`
export const ButtonLoading = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${colors.primary};
  border-radius: 25px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`
export const ButtonTextLoading = styled.Text`
  font-family: ${fonts.fontMedium};
  color: ${colors.primary};
  font-size: 12px;
`
