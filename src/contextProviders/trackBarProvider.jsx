import { createContext, useState } from 'react'

export const TracksContext = createContext()

export const TracksProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('')

  const [currentTrackID, setCurrentTrackID] = useState(null)

  const [currentTrackURL, setCurrentTrackURL] = useState(null)
  const [page, setPage] = useState(null)

  const [isVisible, setIsVisible] = useState(false)
  const [isLikedTrackBar, setIsLikedTrackBar] = useState(false)
  return (
    <TracksContext.Provider
      value={{
        currentPage,
        currentTrackID,
        currentTrackURL,
        page,
        isVisible,
        isLikedTrackBar,

        setCurrentPage,
        setCurrentTrackID,
        setCurrentTrackURL,
        setPage,
        setIsVisible,
        setIsLikedTrackBar,
      }}
    >
      {children}
    </TracksContext.Provider>
  )
}
