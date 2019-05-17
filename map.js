 var map = L.map('map').setView([19.415847, -99.051240],16);
 L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	 attribution: 'Map Data &copy; OpenStreetMap contributors'
 }).addTo(map);


 var lugares = [
    [19.416109, -99.051321], // Mercado
    [19.414654, -99.052146], // Marisqueria
    [19.416335, -99.049292], // Biblioteca
    [19.420119, -99.048411], // Estación Mexibus
    [19.420405, -99.049457], // Barquito
  ];

 var myIcon = L.icon({
   iconUrl: 'lib/images/marker-icon-2x.png',
   iconSize: [25,40],
   popupAnchor: [0, -45]
 });

  var marcadores = [];

  for (var i=0; i < lugares.length; i++) {
    marcadores[i] = new L.marker(lugares[i], {icon: myIcon}).addTo(map);
  }

  var popmer = L.popup({
    minWidth: 100
  }).setContent('<p align = "center"> <font color = "slategray" face = "Verdana"> <b> <font size= "3">  Mercado Maravillas </b> </p> <img src="lib/images/mercado.png" height="200" width="250">');

  var popmar = L.popup({
    minWidth: 100
  }).setContent('<p align = "center"> <font color = "slategray" face = "Verdana"> <b> <font size= "3">  Marisqueria "Cocos" </b> </p> <img src="lib/images/cocos.png" height="200" width="250">');

  var popbib = L.popup({
    minWidth: 100
  }).setContent('<p align = "center"> <font color = "slategray" face = "Verdana"> <b> <font size= "3">  Biblioteca "Jose Vasconcelos"</b> </p> <img src="lib/images/biblioteca.png" height="200" width="250">');

  var popmex = L.popup({
    minWidth: 100
  }).setContent('<p align = "center"> <font color = "slategray" face = "Verdana"> <b> <font size= "3">  Estacion "El Barquito" Mexibus </b> </p> <img src="lib/images/estacion.png" height="200" width="250">');

  var popbar = L.popup({
    minWidth: 100
  }).setContent('<p align = "center"> <font color = "slategray" face = "Verdana"> <b> <font size= "3">  Espacio Publico "El Barquito" </b> </p> <img src="lib/images/barquito.png" height="200" width="250">');

  marcadores[0].bindPopup(popmer);
  marcadores[1].bindPopup(popmar);
  marcadores[2].bindPopup(popbib);
  marcadores[3].bindPopup(popmex);
  marcadores[4].bindPopup(popbar);

 // Líneas y Polígonos

/*
  // var polyline = new L.polyline(lugares).addTo(map); // Líneas
  var polygon = new L.polygon(lugares, {
    color: 'yellow',
    fillColor: 'grey',
    weight: 1
  }).addTo(map);
*/
