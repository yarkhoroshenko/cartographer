// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import L from 'leaflet'; // eslint-disable-line no-unused-vars
import App from './App';

require('./assets/TM_WORLD_BORDERS_SIMPL-0.3.shp');
require('./assets/TM_WORLD_BORDERS_SIMPL-0.3.dbf');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
