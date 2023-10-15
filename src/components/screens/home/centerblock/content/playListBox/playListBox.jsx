import PlayListItem from '../playListItem/playListItem'
import { useSelector } from 'react-redux'
function PlaylistBox(props) {
  const mainData = useSelector(
    (state) => state.allTracks.renderMainPageTracksData
  )
  const favData = useSelector((state) => state.allTracks.renderFavTracksData)
  return (
    <div>
      <div>
        {props.selectedPage === 'main' && mainData
          ? mainData.map((el) => (
              <PlayListItem
                key={el.id}
                name={el.name}
                id={el.id}
                author={el.author}
                album={el.album}
                duration={el.duration_in_seconds}
                url={el.track_file}
                page="main"
                setLinkTrack={props.setSelectedTrackLink}
                updateTracks={props.updateMainTracks}
                updateFavs={props.updateFavTracks}
                liked={
                  el.stared_user &&
                  el.stared_user.some(
                    (favTrack) => favTrack.email === props.isUser
                  )
                }
              />
            ))
          : props.selectedPage === 'myTracks' && favData
          ? favData.map((el) => (
              <PlayListItem
                key={el.id}
                name={el.name}
                id={el.id}
                author={el.author}
                album={el.album}
                duration={el.duration_in_seconds}
                url={el.track_file}
                page="myTracks"
                setLinkTrack={props.setSelectedTrackLink}
                updateFavs={props.updateFavTracks}
                updateTracks={props.updateMainTracks}
              />
            ))
          : ''}
      </div>
    </div>
  )
}
export default PlaylistBox
