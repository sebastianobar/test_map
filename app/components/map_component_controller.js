import { Controller } from "@hotwired/stimulus";

import * as ol from 'ol';

import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import OSM from 'ol/source/OSM.js';
import Style from 'ol/style/Style.js';
import Icon from 'ol/style/Icon.js';
import { Point } from "ol/geom";
import { fromLonLat } from 'ol/proj';

export default class extends Controller {
  static targets = ['map'];

  connect() {
    console.log("Hello, Stimulus!", this.element);
    this.initializeMap();
  }

  initializeMap() {
    const mapElement = this.element;
    const markers = JSON.parse(mapElement.dataset.mapMarkers);

    const map = new ol.Map({
      target: mapElement,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new ol.View({
        center: fromLonLat([0,0]),
        zoom: 2
      })
    });

    markers.forEach(marker => {
      const markerFeature = new ol.Feature({
        geometry: new Point(fromLonLat([marker.longitude, marker.latitude])),
        name: marker.name
      });

      const markerLayer = new VectorLayer({
        source: new VectorSource({
          features: [markerFeature]
        }),
        style: new Style({
          image: new Icon({
            src: 'https://openlayers.org/en/latest/examples/data/icon.png'
          })
        })
      });

      map.addLayer(markerLayer);
    });
  }
}
