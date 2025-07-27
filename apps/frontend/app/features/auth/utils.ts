export const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', token)
}

export const getAccessToken = () => {
  const token = localStorage.getItem('accessToken')
  return token
}

export const clearAuth = () => {
  localStorage.removeItem('accessToken')
}

//TODO: In-memory token storage
// let accessToken: string | null = null

// export const setAccessToken = (token: string) => {
//   accessToken = token
// }

// export const getAccessToken = (): string | null => {
//   return accessToken
// }

// export const clearAuth = () => {
//   accessToken = null
// }
