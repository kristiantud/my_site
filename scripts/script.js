

function spotifyAPI(accessToken) {
    // get spotify recently played
    let xhr = new XMLHttpRequest();
    // const token = 'BQAovx_DLD4i1ozJvuM_nYD9S77Ig_OOFtlXnPLlGADF_QOG5F0cxRkKsPoA1GmXeEQYOKWpFDWenQ_jg4HwRa5mlAq9El_WgUPAMgwoLQBV7rK66MbVCSNDYxf-WzuG1-9h4fit4i51TUiOBDiBC-RiUHizchJKc6tHkFH5fWPe-FYTkPpjjSGcrSy_DhkDg1d_1bpo';
    xhr.open("GET", "https://api.spotify.com/v1/me/player/recently-played?limit=1&after=1");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken );
    xhr.send();

    xhr.onload = () => {
        const responseJSON = xhr.responseText;
        const JSONified = JSON.parse(responseJSON);

        var songname = "";
        var songartist = "";

        songname = songname + JSONified.items[0].track.name;
        songartist = songartist + JSONified.items[0].track.artists[0].name;


        const song_name = document.getElementById('song_title');
        const song_artist = document.getElementById('song_artist');
        const album_cover = document.getElementById('spotify-album-cover');

        song_name.innerText = songname;
        song_artist.innerText = songartist;
        album_cover.src = JSONified.items[0].track.album.images[1].url;

        console.log(JSONified.items[0].track.album.images[1].url);
    };
}



function goTo(site){
    if (site === "github"){
        window.open("https://github.com/kristiantud/", '_blank').focus();
    }

    if (site==="instagram"){
        window.open("https://instagram.com/ktud__/", '_blank').focus();
    }

    if (site==="adobe_paws"){
        window.open("https://xd.adobe.com/view/ebd65a8d-834b-4d44-ab10-c1f65cbea44b-be85/grid", '_blank').focus();
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

    if (site==="git-boardem"){
        window.open("https://github.com/kristiantud/boardem", "_blank").focus();
    }

    if (site==="git-hanabi"){
        window.open("https://git.cs.usask.ca/370-19/h1",'_blank').focus();
    }

    if (site==="git-chatrooms"){
        window.open("https://git.cs.usask.ca/krt916/assignment4_350/",'_blank').focus();
    }

    if (site==="spotify"){
        window.open("https://open.spotify.com/user/r5da6znbljz78gi5s9m5a8age?si=4137b0c0bf0a49ed", "_blank").focus();
    }

    if (site==="warzone-stats"){
        window.open("https://kristiantud.github.io/ataraxia/tournaments.html", "_blank").focus();
    }

    if (site==="tiktok"){
        window.open("https://tiktok.com/@kristiantud").focus();
    }

}



const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: 'rgb(210, 210, 210)', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
//   darkmode.showWidget();


let activated = false;
loadMap("light");

// for dark-mode knob
const darkModeKnob = document.querySelector('.dark-toggle-switch-container');

darkModeKnob.addEventListener('click', () => {
    if (activated == false){
        activated = true;
        darkModeKnob.classList.add('activated');
        loadMap("dark");
    } else {
        activated = false;
        darkModeKnob.classList.remove('activated');
        loadMap("light");
    }
    
});

function loadMap(theme){
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc3RpYW50dWQiLCJhIjoiY2w3YTM3aHVmMGM0dzNwbm8wMjhtcGQwNCJ9.KZLYjFBV-AHWIq6q3sYjGg';
    var style ='';
    if (theme === "light") {
        style=style + "light-v10";
    } else {
        style = style + "dark-v10";
    }


    const geojson = {
        'type': 'FeatureCollection',
        'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Foo',
                'iconSize': [60, 60]
        },
            'geometry': {
            'type': 'Point',
            'coordinates': [-106.648713, 52.130657]
            }
        }]
    };
    


    const map = new mapboxgl.Map({
        container: 'lightmap', // container ID
        style: `mapbox://styles/mapbox/${style}`, // style URL
        center: [-106.648713, 52.130657], // starting position [lng, lat]
        zoom: 12  // starting zoom
    });

    // Add markers to the map.
for (const marker of geojson.features) {
    // Create a DOM element for each marker.
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = `url(./images/map-memoji.png)`;
    el.style.width = `120px`;
    el.style.height = `120px`;
    el.style.backgroundSize = '100%';
     
    el.addEventListener('click', () => {
    window.alert(marker.properties.message);
    });
     
    // Add markers to the map.
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
    }

}


// grabbing token from spotify:
const clientId = 'beb0bfba13774fdd908996e1f4ae0279';
const redirect_uri = 'https://kristiantud.me';



// on load, three different scenarios to handle:
// first load (won't have spotify loaded) -- so we have to call the buildAuthLink()
// second load will have the access code from the buildAuthLink()
// third load will have the spotify loaded but without the need to call buildAuthLink()
function onPageLoad(){
    var url = window.location.hash;
    if (url.length > 7){
        handleRedirect();
    } else if (url != "#loaded"){
        buildAuthLink();
    } 
    
}

function handleRedirect(){
    const currentQueryParameters = getCurrentQueryParameters('#');
    ACCESS_TOKEN = currentQueryParameters.get('access_token');
    spotifyAPI(ACCESS_TOKEN);
    window.history.pushState("", "", redirect_uri + "#loaded");
}

function getCurrentQueryParameters(delimiter = '#') {
    // the access_token is passed back in a URL fragment, not a query string
    // errors, on the other hand are passed back in a query string
    const currentLocation = String(window.location).split(delimiter)[1];
    const params = new URLSearchParams(currentLocation);
    return params;
}

function buildAuthLink(){
    var authURL = "https://accounts.spotify.com/authorize?";
    authURL += "client_id=" + clientId;
    authURL += "&response_type=token";
    authURL += "&redirect_uri=" + redirect_uri;
    authURL += "&scope=user-read-recently-played";
    window.location.href = authURL;
}


// function handleRedirect(){
//     let code = getCode();
//     fetchAccessToken(code);
//     window.history.pushState("", "", redirect_uri);
// }

// function fetchAccessToken(code){
//     let body = "grant_type=authorization_code";
//     body += "&code=" + code;
//     body += "&redirect_uri=" + encodeURI(redirect_uri);
//     body += "&client_id=" + clientId;
//     body += "&client_secret=" + clientSecret;
//     callAuthorizationApi(body);

// }

// function callAuthorizationApi(body){
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", urlString, true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.setRequestHeader('Authorization', 'Basic ' + btoa(clientId + ":" + clientSecret));
//     xhr.send(body);
//     xhr.onload = handleAuthorizationResponse;

// }

// function handleAuthorizationResponse(){
//     if (this.status == 200){
//         var data = JSON.parse(this.responseText);
//         console.log(data);
//         if (data.access_token != undefined){
//             spotifyAPI(data.access_token);
//             // console.log(data.access_token);
//         }
        
//     } else {
//         console.log(this.responseText);
//     }
// }



// function requestAuth(){
//     let url = 'https://accounts.spotify.com/authorize'
//     url += "?client_id=" + clientId;
//     url += "&response_type=code";
//     url += "&redirect_uri=" + encodeURI(redirect_uri);
//     url += "&show_dialog=true";
//     url += "&scope=user-read-recently-played";
//     window.location.href = url;
// }



