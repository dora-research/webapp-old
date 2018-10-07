<template>
  <div ref="cy" id="cy"></div>
</template>

<script>
import cytoscape from 'cytoscape'

export default {
  name: 'Cytoscape',
  props: {
    nodes: {
      type: Array,
      required: true
    },
    edges: {
      type: Array,
      required: true
    }
  },
  mounted () {
    cytoscape({

      container: this.$refs.cy, // container to render in

      elements: this.elements,

      // elements: [ // list of graph elements to start with
      //   { // node a
      //     data: { id: 'a' }
      //   },
      //   { // node b
      //     data: { id: 'b' }
      //   },
      //   { // edge ab
      //     data: { id: 'ab', source: 'a', target: 'b' }
      //   }
      // ],

      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(id)'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],

      layout: {
        name: 'grid',
        rows: 1
      }
    })
  },
  computed: {
    elements () {
      return this.nodes.concat(this.edges)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cy {
  height: 1500px;
}
</style>
