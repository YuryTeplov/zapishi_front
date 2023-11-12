import { defineStore } from 'pinia'

const baseUrl = 'http://34.72.75.183:443'

export const useRegisterStore = defineStore({
  id: 'register',
  state: () => ({
    registerForm: {
      email: '' as string,
    }
  }),
  actions: {

    async confirmEmail(email: string) {
      await $fetch(`${baseUrl}/v1/client/verify`, {
        method: 'POST',
        body: {email: email}
      })
        .then(response => {
          console.log(response)
          this.registerForm.email = email
        })
        .catch(error => { throw error })
    },
    async register(registerForm: any) {
      await $fetch(`${baseUrl}/v1/client/registration`, {
        method: 'POST',
        body: {...registerForm, ...this.registerForm}
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => { throw error })
    }
  }
})

export function setupStore() {
  return useRegisterStore()
}