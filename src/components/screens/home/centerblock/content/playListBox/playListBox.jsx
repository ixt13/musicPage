import PlayListItem from '../playListItem/playListItem'
import { useSelector } from 'react-redux'
function PlaylistBox(props) {
  const mainData = useSelector(
    (state) => state.allTracks.renderMainPageTracksData
  )
  const favData = useSelector((state) => state.allTracks.renderFavTracksData)
  const compilTracks1 = useSelector(
    (state) => state.allTracks.renderCompilationTracks1
  )
  const compilTracks2 = useSelector(
    (state) => state.allTracks.renderCompilationTracks2
  )
  const compilTracks3 = useSelector(
    (state) => state.allTracks.renderCompilationTracks3
  )
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
          : props.selectedPage === 'compilation1' && compilTracks1
          ? compilTracks1.map((el) => (
              <PlayListItem
                key={el.id}
                name={el.name}
                id={el.id}
                author={el.author}
                album={el.album}
                duration={el.duration_in_seconds}
                url={el.track_file}
                page="compilation1"
                setLinkTrack={props.setSelectedTrackLink}
                updateFavs={props.updateFavTracks}
                updateTracks={props.updateMainTracks}
                updateCompilTracks={props.updateCompilationTracks}
                liked={
                  el.stared_user &&
                  el.stared_user.some(
                    (favTrack) => favTrack.email === props.isUser
                  )
                }
              />
            ))
          : props.selectedPage === 'compilation2' && compilTracks2
          ? compilTracks2.map((el) => (
              <PlayListItem
                key={el.id}
                name={el.name}
                id={el.id}
                author={el.author}
                album={el.album}
                duration={el.duration_in_seconds}
                url={el.track_file}
                page="compilation2"
                setLinkTrack={props.setSelectedTrackLink}
                updateFavs={props.updateFavTracks}
                updateTracks={props.updateMainTracks}
                updateCompilTracks={props.updateCompilationTracks}
                liked={
                  el.stared_user &&
                  el.stared_user.some(
                    (favTrack) => favTrack.email === props.isUser
                  )
                }
              />
            ))
          : props.selectedPage === 'compilation3' && compilTracks3
          ? compilTracks3.map((el) => (
              <PlayListItem
                key={el.id}
                name={el.name}
                id={el.id}
                author={el.author}
                album={el.album}
                duration={el.duration_in_seconds}
                url={el.track_file}
                page="compilation3"
                setLinkTrack={props.setSelectedTrackLink}
                updateFavs={props.updateFavTracks}
                updateTracks={props.updateMainTracks}
                updateCompilTracks={props.updateCompilationTracks}
                liked={
                  el.stared_user &&
                  el.stared_user.some(
                    (favTrack) => favTrack.email === props.isUser
                  )
                }
              />
            ))
          : ''}
      </div>
    </div>
  )
}
export default PlaylistBox
