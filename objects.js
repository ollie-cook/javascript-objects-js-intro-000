var playlist = {
'My Bloody Valentine':'song1',
Slowdive:'song2'
}

var updatePlaylist = (playlistName, artistName, songTitle) => {
return Object.assign({},playlistName,{'artistName':'songTitle'})
}
