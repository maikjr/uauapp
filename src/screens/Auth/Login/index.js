import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage'
import FlashMessage, { showMessage } from 'react-native-flash-message'
import { TOKEN_KEY, USER_KEY } from '../../../services/auth'

import api from '../../../services/api'

import {
  Container,
  Content,
  Logo,
  HeaderContent,
  ButtonBack,
  TextLogo,
  InputSection,
  Input,
  Button,
  ButtonText,
  ButtonLoading,
  ButtonTextLoading
} from './styles'

import { colors } from '../../../assets/styles'
import logo from '../../../assets/images/logodark.png'

const Login = ({ navigation }) => {
  const [getUsername, setUsername] = useState('')
  const [getPassword, setPassword] = useState('')
  const [getLoading, setLoading] = useState(false)

  const handleSignInPress = async () => {
    if (getLoading) {
      return null
    }

    if (!getUsername.length && !getPassword.length) {
      showMessage({
        message: 'Ops!',
        description: 'Preencha todos os campos para continuar',
        type: 'danger',
        icon: 'danger'
      })
      return null
    }

    setLoading(true)
    try {
      const response = await api.post('/session/login', {
        username: getUsername,
        password: getPassword
      })

      const { user, token, error } = response.data
      if (token) {
        await AsyncStorage.multiSet([
          [TOKEN_KEY, token],
          [USER_KEY, JSON.stringify(user)]
        ])
        navigation.navigate('SignedIn')
      } else {
        showMessage({
          message: 'Ops!',
          description: error,
          type: 'danger',
          icon: 'danger'
        })
      }
    } catch (err) {
      showMessage({
        message: 'Ops!',
        description:
          'Detectamos uma instabilidade na rede, tente novamente em instantes.',
        type: 'danger',
        icon: 'danger'
      })
    }
    setLoading(false)
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.bg}
      />
      <Container>
        <HeaderContent>
          <ButtonBack onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={28} color={colors.light} />
          </ButtonBack>
          <TextLogo>Fazer Login</TextLogo>
        </HeaderContent>
        <Content>
          <Logo source={logo} resizeMode="contain" />

          <InputSection>
            <Icon name="user" size={28} color={colors.light} />
            <Input
              placeholder="Digite seu usuário"
              value={getUsername}
              onChangeText={(text) => setUsername(text)}
            />
          </InputSection>
          <InputSection>
            <Icon name="lock" size={28} color={colors.light} />
            <Input
              placeholder="Digite sua senha"
              value={getPassword}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
          </InputSection>
          {getLoading ? (
            <ButtonLoading>
              <ButtonTextLoading>CARREGANDO...</ButtonTextLoading>
            </ButtonLoading>
          ) : (
            <Button onPress={handleSignInPress}>
              <ButtonText>FAZER LOGIN</ButtonText>
            </Button>
          )}

        </Content>
      </Container>
      <FlashMessage position="bottom" />
    </>
  )
}

export default Login
