import { defineStore } from 'pinia'

const baseUrl = 'API_URL'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    /* Initialize state from local storage to enable user to stay logged in */
    user: JSON.parse(''),//JSON.parse(localStorage.getItem('user') ?? ''),
    token: null,//JSON.parse(localStorage.getItem('token') ?? ''),
  }),
  actions: {
    async login(loginForm: any) {
      await $fetch(`${baseUrl}/login`, {
        method: 'POST',
        body: loginForm
      })
        .then(response => {
          /* Update Pinia state */
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