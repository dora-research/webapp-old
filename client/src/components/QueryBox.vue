<template>
  <form @submit="onSubmit">
    <textarea id="qb" ref="qb" v-model="query" rows="10" required></textarea>
    <input type="submit"/>
  </form>
</template>

<script>

export default {
  name: 'QueryBox',
  data () {
    return {
      query: null
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      console.log(this.query)
      // TODO: send query to backend for processing
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#qb {
  width: 100%;
}
</style>
