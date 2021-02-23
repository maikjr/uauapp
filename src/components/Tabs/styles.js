import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles'

export const Container = styled.View`
    margin-top: 5px;
`

export const TabsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 6px;
`

export const TabItem = styled.TouchableOpacity.attrs({
})`
    flex: 1;
    height: 100px;
    background: ${(props) => (props.first ? colors.primary : colors.bgElements)};
    border-radius: 5px;
    margin: 0 3px;
    padding: 10px;
    justify-content: space-between;
`

export const TabText = styled.Text`
    font-size: 13px;
    color: ${(props) => (props.first ? '#FFF' : colors.regular)};
    font-family: ${fonts.fontMedium};
`
