import AsyncStorage from '@react-native-community/async-storage'

export const TOKEN_KEY = '@UauAPP:token'
export const USER_KEY = '@UauAPP:user'

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY)

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY)
  return token !== null
}

export const getAddress = async () => {
  const user = await AsyncStorage.getItem(USER_KEY)
  const parse = JSON.parse(user)
  if (parse.address) {
    return { address: parse.address }
  }
  return null
}
