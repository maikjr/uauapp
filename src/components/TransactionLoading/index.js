import React from 'react'

import { Container, TransactionInfo, Title, Type, Price } from './styles'

const Transaction = () => {
  return (
    <Container>
      <TransactionInfo>
        <Title shimmerColors={['#e8f0ff', '#a0c0fd', '#e8f0ff']} autoRun={true} visible={false} />
        <Type shimmerColors={['#e8f0ff', '#a0c0fd', '#e8f0ff']} autoRun={true} visible={false} />
      </TransactionInfo>
      <Price shimmerColors={['#e8f0ff', '#a0c0fd', '#e8f0ff']} autoRun={true} visible={false}/>
    </Container>
  )
}

export default Transaction
