import { createContext, useState } from 'react'

export const TracksContext = createContext()

export const TracksProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('')

  const [currentTrackID, setCurrentTrackID] = useState(null)

  const [currentTrackURL, setCurrentTrackURL] = useState(null)
  const [page, setPage] = useState(null)

  return (
    <TracksContext.Provider
      value={{
        currentPage,
        currentTrackID,
        currentTrackURL,
        page,

        setCurrentPage,
        setCurrentTrackID,
        setCurrentTrackURL,
        setPage,
      }}
    >
      {children}
    </TracksContext.Provider>
  )
}
