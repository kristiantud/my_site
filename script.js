
function spotifyAPI() {
    // get spotify recently played
    let xhr = new XMLHttpRequest();
    const token = 'BQAffhFLwMhbnEpWG53meNhPGAVUcvFmehV6HpqJwY6MzCXc-ssMN5ltZ5kXS1LX7wG8MaAXUtsLcx_qIRS5WTxPgXu-YgvlQjfBJFcSBnNGxWgLuCWZcNE41ll_RFw5KT7pppNuO4ZtOxhnQWulCSVUFdoHiVKtmzchEZqm3pZqoN_SCCQXOFoV1OWLk_B0oOKZNsjZ';
    xhr.open("GET", "https://api.spotify.com/v1/me/player/recently-played?limit=1&after=1484811043508");
    xhr.setRequestHeader('Authorization', 'Bearer ' + token );
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



// post request to get token

// const clientId = '';
// const clientSecret = '';

// const _getToken = async () => {
//     const result = await fetch('https://accounts.spotify.com/api/token', {
//         method: 'POST',
//         headers: {
//             'Content-Type': "application/x-www-form-urlencoded",
//             'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret) 
//         },
//         body: 'grant_type=client_credentials'
//     });

//     const data = await result.json();
//     return data.access_token;
// };


// var token = _getToken.access_token;

function goTo(site){
    if (site === "github"){
        window.open("https://github.com/kristiantud/", '_blank').focus();
    }

    if (site==="instagram"){
        window.open("https://instagram.com/ktud__/", '_blank').focus();
    }
}