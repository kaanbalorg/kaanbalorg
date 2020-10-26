(() => {

  'use strict';

  var mymap = L.map('comunidades', {
    scrollWheelZoom: false
  }).setView([20, -95], 6);

  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  const tiles = L.tileLayer(tileUrl, {
    attribution
  })

  const comunidades = [{
    'sede': 'Telesecundaria y Telebachillerato Dimas Sansores',
    'foto': './src/img/aguaazul.jpg',
    'comunidad': 'Agua Azul',
    'municipio': 'Lázaro Cárdenas',
    'estado': 'Quintana Roo',
    'patrocinador': 'Kaanbal',
    'beneficiadas': '550+',
    'latitud': 20.8542,
    'longitud': -87.32548,
  }, {
    'sede': 'Cooperativa Apícola Muuch Kaab',
    'foto': './src/img/juarez.jpg',
    'comunidad': 'Los Juárez',
    'municipio': 'Lázaro Cárdenas',
    'estado': 'Quintana Roo',
    'patrocinador': 'Internet Society',
    'beneficiadas': '220+',
    'latitud': 20.82347,
    'longitud': -87.33118,
  }, {
    'sede': 'Centro Comunitario Wayak',
    'foto': './src/img/mahahual.jpg',
    'comunidad': 'Mahahual',
    'municipio': 'Mahahual',
    'estado': 'Quintana Roo',
    'patrocinador': 'Tejiendo México',
    'beneficiadas': '180+',
    'latitud': 18.71571,
    'longitud': -87.70802,
  }, {
    'sede': 'Telesecundaria Ramón Bravo Prieto',
    'foto': './src/img/puertomorelos.jpg',
    'comunidad': 'Puerto Morelos',
    'municipio': 'Puerto Morelos',
    'estado': 'Quintana Roo',
    'patrocinador': 'Centro Evaluador México',
    'beneficiadas': '300+',
    'latitud': 20.85608,
    'longitud': -86.90256,
  }, {
    'sede': 'Telesecundaria Comunitaria',
    'foto': './src/img/nuevotezoco.jpg',
    'comunidad': 'Nuevo Tezoco',
    'municipio': 'Tizimín',
    'estado': 'Yucatán',
    'patrocinador': 'The Pale Blue Dot Mx',
    'beneficiadas': '200+',
    'latitud': 21.31063,
    'longitud': -87.56062,
  }, {
    'sede': 'Telesecundaria Comunitaria',
    'foto': './src/img/delirios.jpg',
    'comunidad': 'Delirios',
    'municipio': 'Lázaro Cárdenas',
    'estado': 'Quintana Roo',
    'patrocinador': 'Grupo KAAM',
    'beneficiadas': '100+',
    'latitud': 20.84509,
    'longitud': -87.1461,
  }, {
    'sede': 'Telesecundaria Adolfo Ruiz Cortines',
    'foto': './src/img/sanfrancisco.jpg',
    'comunidad': 'San Francisco Acazuchitlaltongo',
    'municipio': 'Polotitlán',
    'estado': 'Estado de México',
    'patrocinador': 'The Pale Blue Dot Mx',
    'beneficiadas': '450+',
    'latitud': 19.71072,
    'longitud': -98.51157,
  }];

  tiles.addTo(mymap);

  for (let comunidad of comunidades) {
    L.marker([comunidad.latitud, comunidad.longitud]).addTo(mymap)
      .bindPopup("<img src="+comunidad.foto+">"+
        "<b>Proyecto: </b>" + comunidad.sede +
        "<br><b>Comunidad: </b>" + comunidad.comunidad +
        "<br><b>Municipio: </b>" + comunidad.municipio +
        "<br><b>Estado: </b>" + comunidad.estado +
        "<br><b>Patrocinador: </b>" + comunidad.patrocinador +
        "<br><b>Personas Beneficiadas: </b>" + comunidad.beneficiadas);
  }


})();
