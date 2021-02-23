import styled from 'styled-components/native'

import { colors, fonts } from '../../assets/styles'
import { TextInputMask } from 'react-native-masked-text'

export const Container = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false
})`
  flex: 1;
  background-color: #fff;
`
export const Content = styled.View`
  padding: 20px;
`
export const ButtonClose = styled.TouchableOpacity``
export const Section = styled.View`
  padding: 20px 0 15px 0;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.bg};
`
export const TitleSection = styled.Text`
  color: ${colors.light};
  font-size: 18px;
  font-family: ${fonts.fontMedium};
`
export const InputValueContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const LabelCifrao = styled.Text`
  color: ${colors.regular};
  font-family: ${fonts.fontRegular};
  font-size: 36px;
  margin-right: 10px;
`
export const InputValue = styled(TextInputMask)`
  color: ${colors.primary};
  font-family: ${fonts.fontMedium};
  font-size: 36px;
  flex: 1;
`

export const InputText = styled.TextInput`
  background-color: #f2f2f2;
  font-family: ${fonts.fontRegular};
  margin-top: 10px;
  color: ${colors.light};
  height: 50px;
  padding: 0 15px;
`
export const Select = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`
export const Option = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  background-color: ${(props) => (props.selected ? colors.primary2 : '#e8f0ff')};
  padding: 15px 0;
  margin:0 2px;
`
export const OptionText = styled.Text`
  color: ${(props) => (props.selected ? '#fff' : colors.regular)};
  font-family: ${fonts.fontBold};
`
export const Installments = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`
export const InstallmentsContent = styled.View`
`
export const InstallmentsText = styled.Text`
  color: ${colors.regular};
  font-size: 17px;
  font-family: ${fonts.fontRegular};
  width: 150px;
`
export const InstallmentsOptions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const OptionButton = styled.TouchableOpacity`
  margin: 0 5px;
`

export const InstallmentsValue = styled.Text`
  font-family: ${fonts.fontMedium};
  color: ${colors.light};
  font-size: 18px;
`
export const ValueTotal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
export const ValueTotalLabel = styled.Text`
  font-family: ${fonts.fontRegular};
  font-size: 18px;
  color: ${colors.regular};
`
export const ValueTotalText = styled.Text`
  font-family: ${fonts.fontMedium};
  font-size: 36px;
  color: ${colors.iconColor};
`
export const ButtonContinue = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: 30px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`
export const ButtonContinueText = styled.Text`
  color: #fff;
  font-family: ${fonts.fontRegular};
  font-size: 14px;
`
export const ButtonLoading = styled.TouchableOpacity`
  margin-top: 30px;
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
