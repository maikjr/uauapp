import React, { useRef, useState, useEffect } from 'react'

import Header from '../../components/Header'
import FlashMsg from '../../components/FlashMsg'
import Transaction from '../../components/Transaction'
import TransactionLoading from '../../components/TransactionLoading'
import api from '../../services/api'
import getNameByMonth from '../../utils/getMonthName'

import {
  Container,
  Content,
  HeaderSection,
  ButtonSacar,
  ButtonSacarText,
  BalanceContainer,
  Balance,
  BalanceCifrao,
  BalanceText,
  BalanceValue,
  Transactions,
  BottomSheet,
  Months,
  Month,
  MonthText,
  SectionTitle,
  BalanceValueLoading
} from './styles'

const Home = () => {
  const refRBSheet = useRef()
  const date = new Date()
  const [getMonth, setMonth] = useState(date.getMonth() + 1)
  const [getLoading, setLoading] = useState(true)
  const [getTotal, setTotal] = useState()
  const [getExpenses, setExpenses] = useState([])
  const [getMessage, setMessage] = useState()

  async function getBalance () {
    setLoading(true)
    try {
      const response = await api.get(`/balance/${getMonth}`)
      const { total, expenses } = response.data
      setTotal(total)
      setExpenses(expenses)
      setLoading(false)
    } catch (err) {
      setMessage({
        type: 'error',
        msg:
          'Detectamos uma instabilidade na rede, tente novamente em instantes.'
      })
    }
    setLoading(false)
  }

  function changeMonth (month) {
    setMonth(month)
    refRBSheet.current.close()
  }

  useEffect(() => {
    getBalance()
  }, [getMonth])

  return (
    <>
      <Container>
        <HeaderSection>
          <Header title="Balanço mensal"/>
          <BalanceContainer>
            <Balance>
              <BalanceText>Balanço para {getNameByMonth(getMonth)}</BalanceText>
              <BalanceValueLoading shimmerColors={['#e8f0ff', '#a0c0fd', '#e8f0ff']} autoRun={true} visible={!getLoading}>
                <BalanceValue>
                  <BalanceCifrao>R$</BalanceCifrao> {getTotal}
                </BalanceValue>
              </BalanceValueLoading>
            </Balance>
            {!getLoading && (
              <ButtonSacar onPress={() => refRBSheet.current.open()}>
                <ButtonSacarText>Selecionar Mês</ButtonSacarText>
              </ButtonSacar>
            )}
          </BalanceContainer>
        </HeaderSection>
        <Content>
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
          height={450}
          openDuration={250}
          closeOnDragDown
          closeOnPressMask
        >
          <Months>
            <Month onPress={() => changeMonth(1)}>
              <MonthText>Janeiro</MonthText>
            </Month>
            <Month onPress={() => changeMonth(2)}>
              <MonthText>Fevereiro</MonthText>
            </Month>
            <Month onPress={() => changeMonth(3)}>
              <MonthText>Março</MonthText>
            </Month>
            <Month onPress={() => changeMonth(4)}>
              <MonthText>Abril</MonthText>
            </Month>
            <Month onPress={() => changeMonth(5)}>
              <MonthText>Maio</MonthText>
            </Month>
            <Month onPress={() => changeMonth(6)}>
              <MonthText>Junho</MonthText>
            </Month>
            <Month onPress={() => changeMonth(7)}>
              <MonthText>Julho</MonthText>
            </Month>
            <Month onPress={() => changeMonth(8)}>
              <MonthText>Agosto</MonthText>
            </Month>
            <Month onPress={() => changeMonth(9)}>
              <MonthText>Setembro</MonthText>
            </Month>
            <Month onPress={() => changeMonth(10)}>
              <MonthText>Outubro</MonthText>
            </Month>
            <Month onPress={() => changeMonth(11)}>
              <MonthText>Novembro</MonthText>
            </Month>
            <Month onPress={() => changeMonth(12)}>
              <MonthText>Dezembro</MonthText>
            </Month>
          </Months>
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
