import React from 'react'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'

import { HeaderContent, ButtonBack, TextLogo } from './styles'

const Header = ({ title, navigation }) => (
  <HeaderContent>
    <ButtonBack onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={28} color="#fff" />
    </ButtonBack>
    <TextLogo>{title}</TextLogo>
  </HeaderContent>
)

export default withNavigation(Header)
