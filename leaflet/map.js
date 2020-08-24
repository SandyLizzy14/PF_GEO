// Capas base
var map = L.map('map').setView([19.460099,-99.155913], 14);
var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
});
osmBase.addTo(map);

// replace "toner" here with "terrain" or "watercolor"
var water= L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
  layers: ['geonode:_31sia']
})

var terrain= L.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg', {
  layers: ['geonode:_31sia']
})

var toner= L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
  layers: ['geonode:_31sia']
})

var stylem= {
  fillColor: "#ff7800",
  color: "red",
  weight: 2,
  opacity: 1,
  fillOpacity: 0.8
};

//var geojson_carreteras=L.geoJson(geojson_carreteras, {
 // style: stylem
//}).addTo(map);

var styler= {
  fillColor: "#ff7800",
  color: "blue",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

//var geojson_rios=L.geoJson(geojson_rios, {
  //style: styler
//}).addTo(map);

var cuadrantes= {
  fillColor: "Blue",
  color: "gray",
  weight: 1,
  opacity: 0.4,
  fillOpacity: 0.2
};

var denue= {
  fillColor: "black",
  color: "black",
  weight: 1,
  opacity: 0.4,
  fillOpacity: 0.2
};




var stylermun= {
  fillColor: "pink",
  color: "white",
  weight: 1,
  opacity: 0.4,
  fillOpacity: 0.8
};

var poligono= {
  fillColor: "#C0C0C0",
  color: "black",
  weight: 1,
  opacity: 0.2,
  fillOpacity: 0.8
};

var manzana= {
  fillColor: "blue",
  color: "white",
  weight: 1,
  opacity: 0.4,
  fillOpacity: 0.8
};


// Capas Atlampa

var camaras_Atlampa=L.geoJson(camaras_Atlampa, {
  style: styler
}).addTo(map);

var denue_Atlampa=L.geoJson(denue_Atlampa, {
  style: denue
}).addTo(map);

var denuncias2019_Atlampa=L.geoJson(denuncias2019_Atlampa, {
  style: styler
}).addTo(map);

var denuncias2020_Atlampa=L.geoJson(denuncias2020_Atlampa, {
  style: styler
}).addTo(map);

var calles_Atlampa=L.geoJson(calles_Atlampa, {
  style: stylem
}).addTo(map);

var CUH_Catastro_c=L.geoJson(CUH_Catastro_c, {
  style: stylermun
}).addTo(map);

var manzana_Atlampa=L.geoJson(manzana_Atlampa, {
  style: manzana
}).addTo(map);

var poligono_Atlampa=L.geoJson(poligono_Atlampa, {
  style: np
}).addTo(map);

var cuadrantes_Atlampa=L.geoJson(cuadrantes_Atlampa, {
  style: np
}).addTo(map);

var np= {
  fillColor: "blue",
  color: "white",
  weight: 1,
  opacity: 0.4,
  fillOpacity: 0.8
};
//Agregar un marcador//
// var marker = L.marker([19.435, -99.131389]).addTo(map);

// Agregando varios marcadores al mapa//
//var lugares = [
  //[19.5632576, -100.3022177],
  //[19.6968121, -101.1706545],
  //];

  // Agregar icono a los marcadores //
  //var iconoAttraction = L.icon({
    //iconUrl:'img/attraction-11.svg',
    //iconSize:[12,12]
  //});

  //var arregloDeMarcadores = [];

  //for (var i=0; i < lugares.length; i++) {
   //arregloDeMarcadores[i] = new L.marker(lugares[i]).addTo(map);
   //arregloDeMarcadores[i] = new L.marker(lugares[i].{icon: iconoPiramides}).addTo(map);
   //arregloDeMarcadores[i] = new L.marker(lugares[i], {icon: iconoAttraction}).addTo(map);
 // }

//  arregloDeMarcadores[0].bindPopup('<p>Cuicuilco</p>');
//  arregloDeMarcadores[0].bindPopup('<img src="img/cuicuilco.jpg"><p>Cuicuilco </p>');
// Marcador interactivo--tamaño del popup

//var popup = L.popup({
// minWidth: 350
//}).setContent('<img src="img/callejon.jpg"><p><h3>Callejón del Romance</h3><h5>El lugar ideal para enamorarse, este angosto callejón es parte importante de la historia de Morelia ya que cuenta con 19 inmuebles que son catalogados como monumentos históricos. Con sus fachadas de cantera rosa, las elegantes fuentes, las jardineras, la luz amarillenta de sus faroles, es el marco ideal para llevar a tu pareja y susurrarle algo al oído. Si prefieres ir solo, siéntate en una banca y disfruta de un buen libro.</h5><a href="https://www.zonaturistica.com/que-hacer-en-el-lugar-turistico/1640/callejon-del-romance-morelia.html">Más información</a></p>');
//arregloDeMarcadores[4].bindPopup(popup);
var baseMaps = {
    "OSM": osmBase,
    "Watercolor": water,
    "Terrain": terrain,
    "Toner": toner
};

var overlayMaps = {

    "Cámaras C5": camaras_Atlampa,
    "Denue": denue_Atlampa,
    "Denuncias 2019": denuncias2019_Atlampa,
    "Denuncias 2020": denuncias2020_Atlampa,
    "Calles": calles_Atlampa,
    "Manzanas": manzana_Atlampa,
    "Catastro": CUH_Catastro_c,
    "Cuadrantes de Seguridad": cuadrantes_Atlampa,
    "Límite de Atlampa": poligono_Atlampa



};

L.control.layers(baseMaps, overlayMaps,{
	position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
	collapsed: false // true
}).addTo(map);


//coordenadas al dar clic en el mapa//
function onMapClick(e) {
   alert("Coordenadas " + e.latlng);
}

map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
   popup
        .setLatLng(e.latlng)
        .setContent("Coordenadas " + e.latlng.toString())
         .openOn(map);
}

map.on('click', onMapClick);


//control del buscador //
var geocoder = L.Control.geocoder({
  defaultMarkGeocode: false,
  position: 'topleft'
})
  .on('markgeocode', function(e) {
    var bbox = e.geocode.bbox;
    var poly = L.polygon([
      bbox.getSouthEast(),
      bbox.getNorthEast(),
      bbox.getNorthWest(),
      bbox.getSouthWest()
    ]).addTo(map);
    map.fitBounds(poly.getBounds());
  })
  .addTo(map);

//Mini mapa
  var miniMap = new L.Control.MiniMap(L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'), {
            toggleDisplay: true,
            position: 'bottomright'
        }).addTo(map);

//escala
L.control.scale({
  imperial: false
  }
  ).addTo(map);

//
