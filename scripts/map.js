// Initialize and add the map
function initMap() {
    
    var uluru = {lat: 12.9721, lng: 79.1596};
    
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    
    var marker = new google.maps.Marker({position: uluru, map: map});
  }