import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: '',
  })
})
