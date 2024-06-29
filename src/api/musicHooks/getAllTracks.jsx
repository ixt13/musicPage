import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const getAllTracksQuery = () => {
  const mainTracksQuery = useQuery({
    queryKey: ['allTracks'],
    queryFn: async () => {
      try {
        const response = await axios.get(
          'https://skypro-music-api.skyeng.tech/catalog/track/all/'
        )
        return response.data
      } catch (error) {
        throw error
      }
    },
  })
  return mainTracksQuery
}
