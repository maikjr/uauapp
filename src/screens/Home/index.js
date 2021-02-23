import React, { useRef, useState, useEffect } from 'react'
import FlashMsg from '../../components/FlashMsg'

import Icon from 'react-native-vector-icons/Feather'

import logo from '../../assets/images/logo.png'
import { colors } from '../../assets/styles'
import Tabs from '../../components/Tabs'
import Transaction from '../../components/Transaction'
import TransactionLoading from '../../components/TransactionLoading'
import api from '../../services/api'
import getNameByMonth from '../../utils/getMonthName'
import {
  Container,
  Content,
  HeaderSection,
  Header,
  ButtonSacar,
  ButtonSacarText,
  Logo,
  BalanceContainer,
  Balance,
  BalanceCifrao,
  BalanceText,
  BalanceValueLoading,
  BalanceValue,
  SectionTitle,
  Transactions,
  BottomSheet,
  ChangePassContainer,
  InputSection,
  Input,
  Button,
  ButtonText,
  ButtonLoading,
  ButtonTextLoading
} from './styles'

const Home = ({ navigation }) => {
  const refRBSheet = useRef()

  const [getLoading, setLoading] = useState(true)
  const [getTotal, setTotal] = useState()
  const [getExpenses, setExpenses] = useState([])

  const [getCurrentPassword, setCurrentPassword] = useState('')
  const [getNewPassword, setNewPassword] = useState('')
  const [getLoadingPassword, setLoadingPassword] = useState(false)
  const [getMessage, setMessage] = useState()

  async function getBalance () {
    try {
      const response = await api.get('/home')
      const { total, expenses } = response.data
      setTotal(total)
      setExpenses(expenses)
      setLoading(false)
    } catch (err) {
      setMessage({
        type: 'error',
        msg: 'Detectamos uma instabilidade na rede, tente novamente em instantes.'
      })
    }
  }

  useEffect(() => {
    getBalance()
  }, [])

  const date = new Date()

  const handleChangePass = async () => {
    if (getLoadingPassword) {
      return null
    }

    if (!getNewPassword.length || !getCurrentPassword.length) {
      setMessage({
        type: 'error',
        msg: 'Preencha todos os campos para continuar'
      })
      return null
    }

    setLoadingPassword(true)
    try {
      const response = await api.put('/session/change-pass', {
        password: getCurrentPassword,
        newPassword: getNewPassword
      })
      const { error } = response.data
      if (error) {
        setMessage({
          type: 'error',
          msg: error
        })
      } else {
        setCurrentPassword('')
        setNewPassword('')
        refRBSheet.current.close()
        setMessage({
          type: 'success',
          msg:
            'Sua senha foi alterada com sucesso!'
        })
      }
    } catch (err) {
      setMessage({
        type: 'error',
        msg:
          'Detectamos uma instabilidade na rede, tente novamente em instantes.'
      })
    }
    setLoadingPassword(false)
  }

  return (
    <>
      <Container>
        <HeaderSection>
          <Header>
            <Logo source={logo} resizeMode="contain" />
          </Header>
          <BalanceContainer>
            <Balance>
              <BalanceText>Previsão para {getNameByMonth(date.getMonth() + 1)}</BalanceText>
              <BalanceValueLoading shimmerColors={['#e8f0ff', '#a0c0fd', '#e8f0ff']} autoRun={true} visible={!getLoading}>
                <BalanceValue>
                  <BalanceCifrao>R$</BalanceCifrao> {getTotal}
                </BalanceValue>
              </BalanceValueLoading>
            </Balance>

            <ButtonSacar onPress={() => navigation.navigate('Balance')}>
              <ButtonSacarText>Ver Balanço</ButtonSacarText>
            </ButtonSacar>
          </BalanceContainer>
        </HeaderSection>
        <Content>
          <SectionTitle>Para Você</SectionTitle>
          <Tabs
            openChangePass={() => refRBSheet.current.open()}
            navigation={navigation}
          />
          <SectionTitle>Minhas Despesas</SectionTitle>
          <Transactions>
            {getLoading ? (
              <>
                <TransactionLoading />
                <TransactionLoading />
                <TransactionLoading />
                <TransactionLoading />
              </>
            ) : getExpenses.map(expense => (
              <Transaction key={expense._id} expense={expense}/>
            ))}

          </Transactions>
        </Content>

        <BottomSheet
          ref={refRBSheet}
          animationType="slide"
          height={250}
          openDuration={250}
          closeOnDragDown
          closeOnPressMask
        >
          <ChangePassContainer>
            <InputSection>
              <Icon name="lock" size={28} color={colors.iconColor} />
              <Input
                placeholder="Digite sua senha atual"
                value={getCurrentPassword}
                secureTextEntry
                onChangeText={(text) => setCurrentPassword(text)}
              />
            </InputSection>
            <InputSection>
              <Icon name="lock" size={28} color={colors.iconColor} />
              <Input
                placeholder="Digite sua nova senha"
                value={getNewPassword}
                secureTextEntry
                onChangeText={(text) => setNewPassword(text)}
              />
            </InputSection>

            {getLoadingPassword ? (
              <ButtonLoading>
                <ButtonTextLoading>CARREGANDO...</ButtonTextLoading>
              </ButtonLoading>
            ) : (
              <Button onPress={() => handleChangePass()}>
                <ButtonText>FAZER LOGIN</ButtonText>
              </Button>
            )}

          </ChangePassContainer>
          {!!getMessage && (
            <FlashMsg
              type={getMessage.type}
              msg={getMessage.msg}
              close={() => setMessage(null)}
            />
          )}
        </BottomSheet>

      </Container>
      {!!getMessage && (
        <FlashMsg
          type={getMessage.type}
          msg={getMessage.msg}
          close={() => setMessage(null)}
        />
      )}
    </>
  )
}

export default Home
