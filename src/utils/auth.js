import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function setCookie(Name, Value) {
  return Cookies.set(Name, Value)
}
export function getCookie(Name) {
  return Cookies.get(Name)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function removeCookie(Name) {
  return Cookies.remove(Name)
}