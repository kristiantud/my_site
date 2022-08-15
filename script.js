
function spotifyAPI() {
    // get spotify recently played
    // let token = "Bearer " + "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.spotify.com/v1/me/player/recently-played?limit=1&after=1484811043508");
    xhr.setRequestHeader('Authorization', 'Bearer BQBcLgx5YxNnWYiAEBbbDWEM909JVOK0UjyS5C3OvZV5OcJ9vZw7WJcYry4E-vgaQrPilUZPwX8tiZPVZW2cSKwY_1tMSdspxvViHzvAiA_xPk-gk9crXOlvIXMo7mJ-BOv31vim0dg8rXnto94HY1aSOwWcwE6uW1p_2nda2T4gVhqt1G5fL3sV67ZImbWTHrXU60zE');
    xhr.send();

    xhr.onload = () => {
        const responseJSON = xhr.responseText;
        const JSONified = JSON.parse(responseJSON);

        var songname = "";
        var songartist = "";

        songname = songname + JSONified.items[0].track.name;
        songartist = songartist + JSONified.items[0].track.artists[0].name;

        // console.log(songname);
        // console.log(songartist);


        const song_name = document.getElementById('song_title');
        const song_artist = document.getElementById('song_artist');
        const album_cover = document.getElementById('spotify-album-cover');

        song_name.innerText = songname;
        song_artist.innerText = songartist;
        album_cover.src = JSONified.items[0].track.album.images[1].url;

        console.log(JSONified.items[0].track.album.images[1].url);
    };
}


