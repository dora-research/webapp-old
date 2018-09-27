<template>
  <form @submit="onSubmit">
    <textarea id="qb" v-model="qs" rows="10" required></textarea>
    <input type="submit"/>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'QueryBox',
  data () {
    return {
      qs: 'asd'
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      console.log(this.qs)
      // TODO: send qs to backend for processing

      axios.post('/query', { qs: this.qs })
      .then(res => {
        console.log(res)
        this.$emit('queryResult', res)
      })
      .catch(err => {
        console.log(err)
      })
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
