import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const regUser = () => {
  const { mutate, data, isPending } = useMutation({
    mutationFn: async (body) => {
      try {
        const response = await axios.post(
          'https://skypro-music-api.skyeng.tech/user/signup/',
          body
        )
        return response
      } catch (error) {
        throw error
      }
    },
    onSuccess: (data) => {
      console.log(data)
    },
  })

  const handleSendForm = (body) => {
    mutate(body)
  }

  return { handleSendForm, data }
}
