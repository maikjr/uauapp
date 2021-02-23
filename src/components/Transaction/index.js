import React from 'react'
import { withNavigation } from 'react-navigation'
import getNameByMonth from '../../utils/getMonthName'

import { Container, Cricle, TransactionInfo, Title, Type, Price } from './styles'

const Transaction = ({ expense, navigation }) => {
  return (
    <Container onPress={() => navigation.navigate('EditLoan', { id: expense._id })}>
      <Cricle />
      <TransactionInfo>
        <Title>{expense.to}</Title>
        {expense.type === 'fixed' ? (
          <Type>Fixa</Type>
        ) : (
          <Type>Variável - {getNameByMonth(expense.month)}</Type>
        )}
      </TransactionInfo>
      <Price>R$ {expense.value}</Price>
    </Container>
  )
}
export default withNavigation(Transaction)
