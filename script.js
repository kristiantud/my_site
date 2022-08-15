function spotifyAPI() {
    // get spotify recently played
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.spotify.com/v1/me/player/recently-played?limit=1&after=1484811043508");
    xhr.setRequestHeader('Authorization', 'Bearer BQAPjR05_Bm4fNw1vvxOhRd9sluu6XY19UIsk5_YoNBPMGs5z1WZFtMluQkUtLp4qGRBYvFd59BaS5fYh5J0SuYCs_sL5ClD07LH1PrFf5QVbbHFjvct6cNl7fW6CiNZe3sO8pHyX9AlsYyQ4T8p47pPqBtL2yfNez29f19RWNcv-R8hY-XURdcWNPoBq1ZsFuMIdPWj');
    xhr.send();

    xhr.onload = () => {
        const responseJSON = xhr.responseText;
        const JSONified = JSON.parse(responseJSON);

        var songname = "";
        var songartist = "";

        songname = songname + JSONified.items[0].track.name;
        songartist = songartist + JSONified.items[0].track.artists[0].name;

        console.log(songname);
        console.log(songartist);


        const song_name = document.getElementById('#song_title');
        const song_artist = document.getElementById('#song_artist');

        song_name.innerText = songname;
        song_artist.innerText = songartist;
    };
}
