//creating gmaps variable
var map

//populating map onto the page with styling
function createMap () {
  var options = {
    center: { lat: 40.700610, lng: -73.997242, },
    zoom: 14,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#1d2c4d'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#8ec3b9'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#1a3646'}]},
      {
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        stylers: [{color: '#4b6878'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{color: '#64779e'}]
      },
      {
        featureType: 'administrative.province',
        elementType: 'geometry.stroke',
        stylers: [{color: '#4b6878'}]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry.stroke',
        stylers: [{color: '#334e87'}]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{color: '#023e58'}]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{color: '#283d6a'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6f9ba5'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#1d2c4d'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{color: '#023e58'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#3C7680'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#304a7d'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#98a5be'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#1d2c4d'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#2c6675'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#255763'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#b0d5ce'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#023e58'}]
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [{color: '#98a5be'}]
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#1d2c4d'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry.fill',
        stylers: [{color: '#283d6a'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{color: '#3a4762'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#0e1626'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#4e6d70'}]
      }
    ]
  };

//calling the map constructor
  map = new google.maps.Map(document.getElementById('map'), options);

//initilazing search box
  var input = document.getElementById('search');
  var searchBox = new google.maps.places.SearchBox(input);

//setting default map location
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
 
//populating search results on map
  var markers = [];

//storing places when user selects
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length === 0)
      return;

//removing any markers placed before
    markers.forEach(function (m) { m.setMap(null); });
    markers = [];

//setting coordinate boundaries for map
    var bounds = new google.maps.LatLngBounds();

//adjusting bounds
    places.forEach(function (p) {
      if (!p.geometry)
      return;
 
//clearing out markers after each search
    markers.push(new google.maps.Marker({
      map: map,
      title: p.name,
      position: p.geometry.location
    }));

//updating bounds of map if it has a certain viewport
    if (p.geometry.viewport)
      bounds.union(p.geometry.viewport);
    else
      bounds.extend(p.geometry.location);
  });
  map.fitBounds(bounds);
 });
}