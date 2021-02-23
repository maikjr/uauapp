import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles'
import RBSheet from 'react-native-raw-bottom-sheet'
import LinearGradient from 'react-native-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
export const Container = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false
})`
  flex: 1;
  background-color: ${colors.bg};
`
export const Content = styled.View`
  flex: 1;
  padding: 0 10px;
`
export const HeaderSection = styled.View.attrs({
})`
  background-color: #fff;
`
export const Header = styled.View.attrs({
  elevation: 8
})`
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: ${colors.primary2};
`
export const Logo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 90px;
`
export const ButtonNotification = styled.TouchableOpacity``

export const Balance = styled.View`
  align-items: center;
  justify-content: center;
`
export const BalanceContainer = styled.View`
  padding: 20px;
  align-items: center;
  height: 180px;
  justify-content: center;
`
export const BalanceText = styled.Text`
  color: ${colors.regular};
  font-family: ${fonts.fontMedium};
  font-size: 16px;
`

export const BalanceCifrao = styled.Text`
  color: ${colors.regular};
  font-family: ${fonts.fontMedium};
  font-size: 38px;
`
export const BalanceValue = styled.Text`
  color: ${colors.light};
  font-family: ${fonts.fontBold};
  font-size: 38px;
`
export const ButtonSacar = styled.TouchableOpacity`
  background-color: #e8f0ff;
  border-radius: 25px;
  margin-top: 20px;
  padding: 10px 30px;
`
export const ButtonSacarText = styled.Text`
  color: ${colors.primary};
  text-transform: uppercase;
  font-size: 12px;
  font-family: ${fonts.fontMedium};
`
export const SectionTitle = styled.Text`
  color: ${colors.light};
  font-family: ${fonts.fontBold};
  letter-spacing: -0.5px;
  font-size: 18px;
  margin: 15px 0;
`
export const Transactions = styled.View`
  flex: 1;
`

export const Months = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  padding: 0 20px;
`
export const Month = styled.TouchableOpacity`
padding: 10px 0;
margin: 5px 0;
`
export const MonthText = styled.Text`
font-family: ${fonts.fontMedium};
font-size: 18px;
color: ${colors.light}
`

export const BottomSheet = styled(RBSheet).attrs({
  customStyles: {
    container: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingVertical: 10
    },
    wrapper: {},
    draggableIcon: {
      backgroundColor: '#ccc'
    }
  }
})``
export const BalanceValueLoading = styled(ShimmerPlaceHolder)`
  margin-top: 10px;
`
