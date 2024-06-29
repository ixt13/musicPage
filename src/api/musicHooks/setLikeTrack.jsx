import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { checkIfLiked } from '../../redux/slicers/musicProcesses'

export const setLikeTrack = () => {
  const location = useLocation().pathname
  const dispatch = useDispatch()

  const accessToken = localStorage.getItem('token')
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { mutate, data, isPending, isSuccess, isError } = useMutation({
    mutationFn: async (id) => {
      try {
        const response = await axios.post(
          `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
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
    retry: 1,

    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries('allTracks')
      await queryClient.invalidateQueries('favTracks')
      dispatch(checkIfLiked())
    },
    onError: (err) => {
      console.log(err)
      if (location === '/mytracks') {
        navigate('/login')
      }
    },
  })

  const handleLike = (id) => {
    mutate(id)
  }
  return { handleLike, data, isPending, isSuccess, error: isError }
}
