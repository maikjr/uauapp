import styled from 'styled-components/native'
import { colors } from '../../assets/styles'
import LinearGradient from 'react-native-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

export const Container = styled.View`
  background-color: ${colors.bgElements};
  padding: 15px 10px;
  border-radius: 3px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
export const TransactionInfo = styled.View`
  flex: 1;
`
export const Title = styled(ShimmerPlaceHolder)`
  width: 90%;
`
export const Type = styled(ShimmerPlaceHolder)`
  margin-top: 5px;
  width: 100px;
`
export const Price = styled(ShimmerPlaceHolder)`
  width: 90px;
`
