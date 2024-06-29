import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { checkIfLiked } from '../../redux/slicers/musicProcesses'

export const useRemoveTrack = () => {
  const dispatch = useDispatch()
  const accessToken = localStorage.getItem('token')

  const queryClient = useQueryClient()
  const { mutate, data, isSuccess, isError } = useMutation({
    mutationFn: async (id) => {
      const response = await axios.delete(
        `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      return response
    },
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries('allTracks')
      await queryClient.invalidateQueries('favTracks')
      dispatch(checkIfLiked())
    },
  })

  const deleteTrack = (id) => {
    mutate(id)
  }

  return { deleteTrack, data, isSuccess, isError }
}
