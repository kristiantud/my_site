
function spotifyAPI() {
    // get spotify recently played
    let xhr = new XMLHttpRequest();
    const token = 'BQAXSjpUDnhYx0ar9DYPJvMF2eoX3yx3RRP570KvWPg67Zs4pmGXMnQ-SYfyTqLXm8GO3mqJ6wWv-r171EwMetJgKPt5m1kNROyEuDgNgwT2t_I8x_070_orVryAk08YaDceOQoj-U10MaJEJq0vOjvvzbhE1ZXn_dWD2ZmRyODdkTTfj9TIM3PjlXyM_lYbbqfhWeNx';
    xhr.open("GET", "https://api.spotify.com/v1/me/player/recently-played?limit=1&after=500");
    xhr.setRequestHeader('Authorization', 'Bearer ' + token );
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

}



const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: 'darkgray', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
//   darkmode.showWidget();


loadMap("light");

// for dark-mode knob
const darkModeKnob = document.querySelector('.dark-toggle-switch-container');
let activated = false;
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