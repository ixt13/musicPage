import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
export const getFavsTracksQuery = () => {
  const accessToken = localStorage.getItem('token')

  const favTracksQuery = useQuery({
    queryKey: ['favTracks'],
    queryFn: async () => {
      try {
        const response = await axios.get(
          'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )

        return response.data
      } catch (error) {
        throw error
      }
    },
    retry: 1,
  })

  return favTracksQuery
}
