import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

export const logUser = () => {
  const queryClient = useQueryClient()

  const { mutate, data, isPending, isSuccess, isError } = useMutation({
    mutationFn: async (body) => {
      try {
        const response = await axios.post(
          'https://skypro-music-api.skyeng.tech/user/token/',
          body
        )
        return response
      } catch (error) {
        throw error
      }
    },

    onSuccess: (res) => {
      if (res.data) {
        localStorage.setItem('token', res.data.access)
        localStorage.setItem('rtoken', res.data.refresh)

        const tokenData = jwtDecode(res.data.access)
        localStorage.setItem('userID', tokenData.user_id)
      }
    },
  })

  const handleLog = (body) => {
    mutate(body)
  }
  return { handleLog, data, isPending, isSuccess, isError }
}
