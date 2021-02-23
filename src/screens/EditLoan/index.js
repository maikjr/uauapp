import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'

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
  ButtonTextLoading,
  LoadingContainer,
  ButtonRemove,
  ButtonTextRemove
} from './styles'

const NewLoan = ({ navigation }) => {
  const [getValue, setValue] = useState('')
  const [getType, setType] = useState('fixed')
  const [getTo, setTo] = useState()
  const id = navigation.getParam('id')

  const [getLoading, setLoading] = useState(true)
  const [getMessage, setMessage] = useState()

  async function getExpense () {
    try {
      const response = await api.get(`/expenses/${id}`)
      const { expense } = response.data
      setValue(expense.value)
      setType(expense.type)
      setTo(expense.to)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setMessage({
        type: 'error',
        msg: 'Detectamos uma instabilidade na rede, tente novamente em instantes.'
      })
    }
  }

  useEffect(() => {
    getExpense()
  }, [])

  async function submitExpense () {
    if (!getValue || !getType || !getTo) {
      setMessage({
        type: 'error',
        msg:
          'Preencha todos os campos para continuar.'
      })
      return false
    }

    setLoading(true)
    try {
      const response = await api.put(`/expenses/${id}`, {
        value: getValue.replace(',', '.'),
        type: getType,
        to: getTo
      })
      setValue('')
      setTo()
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

  async function removeExpense () {
    Alert.alert(
      'Deseja mesmo excluir isso?',
      'Essa ação não pode ser desfeita',
      [
        {
          text: 'Não',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: async () => {
            try {
              setLoading(true)
              await api.delete('/expenses/' + id)
              navigation.goBack()
              setLoading(false)
            } catch (err) {
              console.log(err)
              setLoading(false)
              setMessage({
                type: 'error',
                msg:
                  'Detectamos uma instabilidade na rede, tente novamente em instantes.'
              })
            }
          }
        }
      ],
      { cancelable: false }
    )
  }

  return (
    <>
      <Container>
        <Header title="Editar Despesa" />
        <Content>
          <Section>
            <TitleSection>Qual o valor da despesa ?</TitleSection>
            <LoadingContainer shimmerColors={['#e8f0ff', '#a0c0fd', '#e8f0ff']} autoRun={true} visible={!getLoading}>
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
            </LoadingContainer>
          </Section>
          <Section>
            <TitleSection>Essa despesa é fixa ou váriada?</TitleSection>
            <LoadingContainer shimmerColors={['#e8f0ff', '#a0c0fd', '#e8f0ff']} autoRun={true} visible={!getLoading}>
              <Select>
                <Option selected={getType === 'fixed'} onPress={() => setType('fixed')}>
                  <OptionText selected={getType === 'fixed'}>Fixa</OptionText>
                </Option>
                <Option selected={getType === 'variable'} onPress={() => setType('variable')}>
                  <OptionText selected={getType === 'variable'}>Váriavel</OptionText>
                </Option>
              </Select>
            </LoadingContainer>
          </Section>
          <Section>
            <TitleSection>Para quem você paga?</TitleSection>
            <LoadingContainer shimmerColors={['#e8f0ff', '#a0c0fd', '#e8f0ff']} autoRun={true} visible={!getLoading}>
              <InputText placeholder="Digite aqui" value={getTo} onChangeText={(text) => setTo(text)}/>
            </LoadingContainer>
          </Section>

          { getLoading ? (
            <ButtonLoading onPress={() => submitExpense()}>
              <ButtonTextLoading>CARREGANDO...</ButtonTextLoading>
            </ButtonLoading>
          ) : (
            <>
              <ButtonContinue onPress={() => submitExpense()}>
                <ButtonContinueText>CONTINUAR</ButtonContinueText>
              </ButtonContinue>
              <ButtonRemove onPress={() => removeExpense()}>
                <ButtonTextRemove>EXCLUIR</ButtonTextRemove>
              </ButtonRemove>
            </>
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
