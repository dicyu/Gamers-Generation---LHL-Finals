const storeAccessTokenInLocalStorage = (token)  => {
  localStorage.setItem('token', token)
}

const getAccessTokenInLocalStorage =() => {
  return localStorage.getItem('token')
}

module.exports = { storeAccessTokenInLocalStorage, getAccessTokenInLocalStorage }