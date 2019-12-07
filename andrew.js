var map

function createMap () {
  var options = {
    center: { lat: 40.700610, lng: -73.997242, },
    zoom: 14
  };

  map = new google.maps.Map(document.getElementById('map'), options);

  var input = document.getElementById('search');
  var searchBox = new google.maps.places.SearchBox(input);

  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
  
  var markers = [];

  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length === 0)
      return;

    markers.forEach(function (m) { m.setMap(null); });
    markers = [];

    var bounds = new google.maps.LatLngBounds();

    places.forEach(function (p) {
      if (!p.geometry)
      return;
    
    markers.push(new google.maps.Marker({
      map: map,
      title: p.name,
      position: p.geometry.location
    }));

    if (p.geometry.viewport)
      bounds.union(p.geometry.viewport);
    else
      bounds.extend(p.geometry.location);
  });
  map.fitBounds(bounds);
 });
}

function createMarker(options, html) {
  var marker = new google.maps.Marker(options);
  if (html) {
    google.maps.event.addListener(marker, "click", function () {
      infoWindow.setContent(html);
      infoWindow.open(options.map, this);
    });
  }
  return marker;
}