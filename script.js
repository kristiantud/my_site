function spotifyAPI() {
    // get spotify recently played
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.spotify.com/v1/me/player/recently-played?limit=1&after=1484811043508");
    xhr.setRequestHeader('Authorization', 'Bearer BQBW6fW40chYlC0U7-bc82afxVer2wCrA0SeivNPolbMYZdWTWGhmL0FuVXuGh1Q8rOmuQpxhE01x2m49ScwWnnrQdo5Ip2Zc8vggIVFBgNg0dlABFro9vV0iZO7LF9OpDipzaMqesPptTGUyTS_ifggWsZmG-B-DUj3d23VSjKIUHuixLU8mkXCUrfGbtXWwK-mhoOs');
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
