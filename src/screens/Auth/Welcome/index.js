import React from 'react'
import { StatusBar } from 'react-native'

import logo from '../../../assets/images/logo.png'
import person from '../../../assets/images/person.png'
import {
  Container,
  Content,
  Logo,
  Description,
  ButtonsFooter,
  ButtonFirst,
  ButtonFirstText,
  ButtonsLogin,
  ButtonLogin,
  ButtonLoginText
} from './styles'

const Welcome = ({ navigation }) => (
  <>
    <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000" />
    <Container source={person}>
      <Content>
        <Logo source={logo} resizeMode="contain" />
        <Description>
         Controle financeiro para quem não é nerd.
        </Description>
      </Content>

      <ButtonsFooter>
        <ButtonFirst>
          <ButtonFirstText>jÁ TENHO CONVITE</ButtonFirstText>
        </ButtonFirst>
        <ButtonsLogin>
          <ButtonLogin onPress={() => navigation.navigate('Login')}>
            <ButtonLoginText>JÁ TENHO CONTA</ButtonLoginText>
          </ButtonLogin>
        </ButtonsLogin>
      </ButtonsFooter>
    </Container>
  </>
)

export default Welcome
