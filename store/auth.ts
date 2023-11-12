import { defineStore } from 'pinia'

const baseUrl = 'http://34.72.75.183:443/'


export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    /* Initialize state from local storage to enable user to stay logged in */
    user: {} as any,//JSON.parse(localStorage.getItem('user') ?? ''),
    token: null as any,//JSON.parse(localStorage.getItem('token') ?? ''),
  }),
  actions: {
    async login(loginForm: any) {
      await $fetch(`${baseUrl}/v1/auth`, {
        method: 'POST',
        body: loginForm
      })
        .then(response => {
          /* Update Pinia state */
          console.log(response)
          this.user = response
          this.token = this.user.jwt_token
          /* Store user in local storage to keep them logged in between page refreshes */
          localStorage.setItem('user', JSON.stringify(this.user))
          localStorage.setItem('token', JSON.stringify(this.token))
        })
        .catch(error => { throw error })
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  }
})

export const useRegisterStore = defineStore({
  id: 'register',
  state: () => ({
    email: '' as string,
    password: '' as string,
    code: '' as string,
  }),
  actions: {
  }
})

export function setupStore() {
  return useAuthStore()
}