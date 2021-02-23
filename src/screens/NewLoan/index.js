import React, { useState } from 'react'
import { NavigationActions, StackActions } from 'react-navigation'

import api from '../../services/api'

import Header from '../../components/Header'
import FlashMsg from '../../components/FlashMsg'

import {
  Container,
  Section,
  TitleSection,
  InputValueContainer,
  LabelCifrao,
  InputValue,
  InputText,
  Content,
  ButtonContinue,
  ButtonContinueText,
  Select,
  Option,
  OptionText,
  ButtonLoading,
  ButtonTextLoading
} from './styles'

const NewLoan = ({ navigation }) => {
  const [getValue, setValue] = useState('')
  const [getType, setType] = useState('fixed')
  const [getTo, setTo] = useState()

  const [getLoading, setLoading] = useState(false)
  const [getMessage, setMessage] = useState()

  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })]
  })

  async function submitExpense () {
    if (!getValue.length || !getType || !getTo) {
      setMessage({
        type: 'error',
        msg:
          'Preencha todos os campos para continuar.'
      })
      return false
    }

    setLoading(true)
    try {
      const response = await api.post('/expenses', {
        value: getValue.replace(',', '.'),
        type: getType,
        to: getTo
      })
      setValue('')
      setTo()
      navigation.dispatch(resetAction)
      setMessage({
        type: 'success',
        msg:
          'Despesa adicionada com sucesso!'
      })
    } catch (err) {
      setMessage({
        type: 'error',
        msg:
          'Detectamos uma instabilidade na rede, tente novamente em instantes.'
      })
    }
    setLoading(false)
  }

  return (
    <>
      <Container>
        <Header title="Nova Despesa" />
        <Content>
          <Section>
            <TitleSection>Qual o valor da despesa ?</TitleSection>
            <InputValueContainer>
              <LabelCifrao>R$</LabelCifrao>
              <InputValue
                type={'money'}
                value={getValue}
                onChangeText={(text) => {
                  setValue(text)
                }}
                options={{
                  precision: 2,
                  separator: '',
                  delimiter: '.',
                  unit: '',
                  suffixUnit: ''
                }}
                placeholder="0.00"
                placeholderTextColor="#9198A6"
              />
            </InputValueContainer>
          </Section>
          <Section>
            <TitleSection>Essa despesa é fixa ou váriada?</TitleSection>
            <Select>
              <Option selected={getType === 'fixed'} onPress={() => setType('fixed')}>
                <OptionText selected={getType === 'fixed'}>Fixa</OptionText>
              </Option>
              <Option selected={getType === 'variable'} onPress={() => setType('variable')}>
                <OptionText selected={getType === 'variable'}>Váriavel</OptionText>
              </Option>
            </Select>
          </Section>
          <Section>
            <TitleSection>Para quem você paga?</TitleSection>
            <InputText placeholder="Digite aqui" value={getTo} onChangeText={(text) => setTo(text)}/>
          </Section>

          {getLoading ? (
            <ButtonLoading onPress={() => submitExpense()}>
              <ButtonTextLoading>CARREGANDO...</ButtonTextLoading>
            </ButtonLoading>
          ) : (
            <ButtonContinue onPress={() => submitExpense()}>
              <ButtonContinueText>CONTINUAR</ButtonContinueText>
            </ButtonContinue>
          )
          }

        </Content>

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

export default NewLoan
