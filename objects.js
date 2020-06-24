var playlist = {
  'Harry Styles':'Watermelon Sugar';
}

var updatePlaylist = (playlistName, artistName, songTitle) => {
return Object.assign({},playlistName,{[artistName]:'songTitle'})

}
