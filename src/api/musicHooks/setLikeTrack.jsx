import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const setLikeTrack = () => {
  const accessToken = localStorage.getItem('token')
  const queryClient = useQueryClient()

  const { mutate, data, isPending, isSuccess, isError } = useMutation({
    mutationFn: async (id) => {
      console.log(id)
      try {
        const response = await axios.post(
          `	https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        return response
      } catch (error) {
        throw error
      }
    },

    onSuccess: (res) => {
      console.log(res)
      queryClient.invalidateQueries('allTracks')
    },
    onError: (err) => {
      console.log(err)
    },
  })

  const handleLike = (id) => {
    mutate(id)
  }
  return { handleLike, data, isPending, isSuccess, isError }
}
