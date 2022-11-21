import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/webGEO/wms',
        params: {'LAYERS': 'webGEO:hidhway', 'TILED': true},
        serverType: 'geoserver',
        // Countries have transparency, so do not fade tiles:
        transition: 0,
      }),
    }),
       new TileLayer({
        source: new TileWMS({
          url: 'http://localhost:8080/geoserver/webGEO/wms',
          params: {'LAYERS': 'webGEO:railway', 'TILED': true},
          serverType: 'geoserver',
          // Countries have transparency, so do not fade tiles:
          transition: 0,
        }),
      }),
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/webGEO/wms',
        params: {'LAYERS': 'webGEO:border', 'TILED': true},
        serverType: 'geoserver',
        // Countries have transparency, so do not fade tiles:
        transition: 0,
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([92.852572, 56.010569]),
    zoom: 11
  })
});