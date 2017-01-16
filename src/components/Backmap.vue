<template>
  <div id="backmap"></div>
</template>
<script>
  export default {
    name: 'backmap',
    data() {
      return {
        leafmap: {},
      };
    },
    mounted: function mount() {
      this.leafmap = L.map('backmap', { // eslint-disable-line
        center: [20, 0],
        zoom: 3,
      }).addLayer(
        new L.TileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png') // eslint-disable-line
      );
      const geo = L.geoJson({features:[]}, { // eslint-disable-line
        onEachFeature: function popUp(f, l) {
          const out = [];
          if (f.properties) {
            for (let key in f.properties) { // eslint-disable-line
              out.push(key+': '+f.properties[key]); // eslint-disable-line
            }
            l.bindPopup(out.join('<br />'));
          }
        },
      }).addTo(this.leafmap);
      const base = 'map/TM_WORLD_BORDERS_SIMPL-0.3.zip';
      shp(base).then(function geoCb(data) { // eslint-disable-line
        geo.addData(data);
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style></style>-->
