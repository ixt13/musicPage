// import { useQueryClient } from '@tanstack/react-query'
// import { useContext, useEffect } from 'react'
// import { TracksContext } from '../contextProviders/trackBarProvider'
// export const getCurrentTrack = (callback) => {
//   const queryClient = useQueryClient()

//   const { currentPage, currentTrackID } = useContext(TracksContext)

//   const mainPageTracks = queryClient.getQueryData(['allTracks'])

//   const favPageTracks = queryClient.getQueryData(['favTracks'])
//   //////////////////////////////////////////////////////////

//   const currenTrack = (trackID, data) => {
//     const elIndex = data.findIndex((elem) => {
//       return elem.id === trackID
//     })

//     return callback(data[elIndex].track_file)
//   }

//   useEffect(() => {
//     if (currentPage === 'main' && mainPageTracks) {
//       currenTrack(currentTrackID, mainPageTracks)
//     }
//     if (currentPage === 'favTracks' && favPageTracks) {
//       currenTrack(currentTrackID, favPageTracks)
//     }
//   }, [currentPage, currentTrackID])

//   //////////////////////////////////////////////////////////
// }
