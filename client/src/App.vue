<template>
  <div id="app">
    <QueryBox :default="nodesDefault" @result="updateNodes" />
    <QueryBox :default="edgesDefault" @result="updateEdges" />
    <Cytoscape :nodes="nodes" :edges="edges" />
  </div>
</template>

<script>
import Cytoscape from './components/Cytoscape.vue'
import QueryBox from './components/QueryBox.vue'

const nodesDefault =
`FOR p in Paper
  LIMIT 100
  RETURN { id: p.Id }
`
const edgesDefault =
`FOR p in Paper
  FOR citer in p.RId    
    RETURN { id: p.Id + citer, source: p.Id, target: citer }
  LIMIT 100
`

export default {
  name: 'app',
  data () {
    return {
      nodesDefault,
      nodes: [],
      edgesDefault,
      edges: []
    }
  },
  components: {
    Cytoscape,
    QueryBox
  },
  methods: {
    updateNodes (nodes) {
      this.nodes = nodes
    },
    updateEdges (edges) {
      if (this.nodes.length > 0) this.edges = edges
    }
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
