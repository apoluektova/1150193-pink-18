ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.938867, 30.323133],
    zoom: 17,
    controls: []
  });

  myMap.behaviors.disable("scrollZoom");

  var myPlacemark = new ymaps.Placemark([59.938867, 30.323133], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/icon-map-marker.svg',
    iconImageSize: [36, 35],
    iconImageOffset: [-20, 15]
  });

  myMap.geoObjects.add(myPlacemark);
}
