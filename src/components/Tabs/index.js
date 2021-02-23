import React from 'react'
import { Linking, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { colors } from '../../assets/styles'
import { onSignOut } from '../../services/auth'

import {
  Container, TabsContainer, TabItem, TabText
} from './styles'

const Tabs = ({ openChangePass, navigation }) => {
  const sairAlert = () => {
    Alert.alert(
      'Desconectar',
      'Tem certeza que deseja sair ?',
      [

        {
          text: 'Cancelar',
          onPress: () => null
        },
        {
          text: 'SAIR',
          onPress: () => {
            onSignOut()
            navigation.navigate('SignedOut')
          }
        }
      ],
      { cancelable: true }
    )
  }
  return (
    <Container>
      <TabsContainer>
        <TabItem first onPress={() => navigation.navigate('NewLoan')}>
          <Icon name="dollar-sign" color="#fff" size={27} />
          <TabText first>Adicionar Despesa</TabText>
        </TabItem>
        <TabItem>
          <Icon name="users" color={colors.iconColor} size={27} />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem onPress={() => Linking.openURL('whatsapp://send?text=Olá+suporte%2C+tudo+bem+%3F+estou+precisando+de+ajuda+com+o+*uauapp*&phone=+5579999496833')}>
          <Icon name="info" color={colors.iconColor} size={27} />
          <TabText>Me ajuda</TabText>
        </TabItem>
      </TabsContainer>
      <TabsContainer>
        <TabItem>
          <Icon name="star" color={colors.iconColor} size={27} />
          <TabText>Avaliar App</TabText>
        </TabItem>
        <TabItem onPress={openChangePass}>
          <Icon name="settings" color={colors.iconColor} size={27} />
          <TabText>Alterar Senha</TabText>
        </TabItem>
        <TabItem onPress={() => sairAlert()}>
          <Icon name="log-out" color={colors.iconColor} size={27} />
          <TabText>Desconectar</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  )
}

export default Tabs
