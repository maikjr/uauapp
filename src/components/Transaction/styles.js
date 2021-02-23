import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles'

export const Container = styled.TouchableOpacity`
  background-color: ${colors.bgElements};
  padding: 15px 10px;
  border-radius: 3px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`
export const Cricle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${colors.primary2};
`
export const TransactionInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`
export const Title = styled.Text`
  color: #37393d;
  font-family: ${fonts.fontMedium};
  font-size: 15px;
`
export const Type = styled.Text`
  color: ${colors.regular};
  font-family: ${fonts.fontRegular};
  font-size: 14px;
`
export const Price = styled.Text`
  color: #3ac318;
  font-family: ${fonts.fontBold};
  font-size: 16px;
`
