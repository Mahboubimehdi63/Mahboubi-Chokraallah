var myCenter = new google.maps.LatLng(33.98001, -6.86583);

function initialize() {
var mapProp = {
center:myCenter,
zoom:15,
scrollwheel:false,
draggable:false,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
position:myCenter,
});
var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Actions Services & Solutions</h1>'+
            '<div id="bodyContent">'+
            '<p>Institut National des postes et télécommunications,<br/>'+
            ' Avenue Allal El Fassi, Rabat, Maroc</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: myCenter,
          map: map,
          title: 'INPT'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });


marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);