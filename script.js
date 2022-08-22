
function spotifyAPI() {
    // get spotify recently played
    let xhr = new XMLHttpRequest();
    const token = 'BQBmAOpdIacKvaFDqvx-DiI5KotemeG_yC00HtdW_Xi34WoUZFv8cdkSdkXWKjWZP8ETJNPYiFCBuUgPIoRg4opmJ6zERwGBxVYnBb6B5hczW4rbcDf033m06sA_2Qd1X4g7u7M9YAOgjKJUS2VRFuDRVVCEYhlpo-GW25Lc_HzGF9xb0nNvp_pyBFQ27A52mq6UZgs9';
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

    if (site==="adobe_paws"){
        window.open("https://xd.adobe.com/view/ebd65a8d-834b-4d44-ab10-c1f65cbea44b-be85/", '_blank').focus();
    }

    if (site==="figma_boardem"){
        window.open("https://www.figma.com/file/BBtgTziTJjeGUSDt8p1BEb/boardem.?node-id=0%3A1" , '_blank').focus();
    }

    if (site==="figma_kristiantudv1"){
        window.open("https://www.figma.com/file/BHAkQMAXdXpt06KN2SepYf/Resume?node-id=0%3A1",'_blank').focus();
    }

    if (site==="git-todos"){
        window.open("https://git.cs.usask.ca/krt916/finalproject350",'_blank').focus();
    }

    if (site==="bionic-reading"){
        window.open("https://github.com/kristiantud/BionicReading",'_blank').focus();
    }

    if (site==="complido-cars"){
        window.open("https://complidocars.com",'_blank').focus();
    }

    if (site==="discord-bot-warzone"){
        window.open("https://github.com/kristiantud/mw_discord_bot",'_blank').focus();
    } 

    if (site==="boardem-site"){
        window.open("https://kristiantud.github.io/boardem/",'_blank').focus();
    }

    if (site==="rock-paper-scissors"){
        window.open("https://git.cs.usask.ca/krt916/networking306",'_blank').focus();
        
    }

    if (site==="git-hanabi"){
        window.open("https://git.cs.usask.ca/370-19/h1",'_blank').focus();
    }

    if (site==="git-chatrooms"){
        window.open("https://git.cs.usask.ca/krt916/assignment4_350/",'_blank').focus();
    }

    

    
    
}