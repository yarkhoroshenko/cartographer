<template>
  <div id="app">
    <backmap></backmap>
  </div>
</template>

<script>
import Backmap from './components/Backmap';

export default {
  name: 'app',
  components: {
    Backmap,
  },
};
</script>

<style>
#backmap {
	width: 100%;
	height: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
