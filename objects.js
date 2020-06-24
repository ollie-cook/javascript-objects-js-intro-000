var playlist = {
'Harry Styles':'Watermelon Sugar'
}

var updatePlaylist = (playlist, artistName, songTitle) => {
return Object.assign({},playlist,{'artistName':'songTitle'})
}
