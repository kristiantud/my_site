

mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc3RpYW50dWQiLCJhIjoiY2w3YTM3aHVmMGM0dzNwbm8wMjhtcGQwNCJ9.KZLYjFBV-AHWIq6q3sYjGg';

const lightmap = new mapboxgl.Map({
    container: 'lightmap', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [-106.648713, 52.130657], // starting position [lng, lat]
    zoom: 12  // starting zoom
});

// const darkmap = new mapboxgl.Map({
//     container: 'darkmap', // container ID
//     style: 'mapbox://styles/kristiantud/cl7a35dbe000414qxflvcyme0', // style URL
//     center: [52.130657, -106.648713], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });


