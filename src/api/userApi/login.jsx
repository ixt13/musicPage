import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'

export const logUser = () => {
  const [errorData, setErrorData] = useState('')

  const { mutate, data, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: async (body) => {
      const response = await axios.post(
        'https://skypro-music-api.skyeng.tech/user/token/',
        body
      )
      return response
    },

    onSuccess: (res) => {
      if (res.data) {
        localStorage.setItem('token', res.data.access)
        localStorage.setItem('rtoken', res.data.refresh)

        const tokenData = jwtDecode(res.data.access)
        localStorage.setItem('userID', tokenData.user_id)
      }
    },
    onError: (error) => {
      setErrorData(error.response.data)
    },
  })

  const handleLog = (body) => {
    mutate(body)
  }
  return { handleLog, data, isPending, isSuccess, isError, errorData }
}
