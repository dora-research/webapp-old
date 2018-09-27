<template>
  <div id="app">
    <QueryBox/>
    <Cytoscape elements="elements"/>
  </div>
</template>

<script>
import Cytoscape from './components/Cytoscape.vue'
import QueryBox from './components/QueryBox.vue'

export default {
  name: 'app',
  data () {
    return {
      elements: []
    }
  },
  components: {
    Cytoscape,
    QueryBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
