// // Initialize and add the map
// function initmap(){
//     // Your location
//     const loc = { lat:27.135100, lng: 87.821259 };
//     // Centered map on location
//     const map= new google.maps.Map(document.querySelector('.map')
//     , {
//         zoom: 14
//         center: loc

//     } );
//     // The marker, positioned at location
//     const marker = new google.maps.Marker ({ position: loc,map: map});
// }

// smooth scrolling
$('#navbar a, .btn').on('click', function(event){
    if (this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -100
            },
            800
        );
    }
});