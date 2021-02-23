import 'react-native-gesture-handler'

import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { isSignedIn } from './services/auth'
import { createRootNavigator } from './routes'
import { colors } from './assets/styles'

export default function src () {
  const [signed, setSigned] = useState(false)
  const [signLoaded, setSignLoaded] = useState(false)

  useEffect(() => {
    isSignedIn()
      .then((res) => {
        setSigned(res)
        setSignLoaded(true)
      })
      .catch((err) =>
        alert('Desculpe, algo deu errado! tente novamente mais tarde.')
      )
  }, [])

  if (!signLoaded) {
    return null
  }
  const Layout = createRootNavigator(signed)
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={colors.primary2}
      />
      <Layout />
    </>
  )
}
