import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

export const regUser = () => {
  const [errorData, setErrorData] = useState('')

  const { mutate, data, isPending, isError } = useMutation({
    mutationFn: async (body) => {
      const response = await axios.post(
        'https://skypro-music-api.skyeng.tech/user/signup/',
        body
      )
      return response
    },
    onError: (error) => {
      setErrorData(error.response.data)
      console.log(error)
    },
  })

  const handleSendForm = (body) => {
    mutate(body)
  }

  return { handleSendForm, data, errorData, isError, isPending }
}
