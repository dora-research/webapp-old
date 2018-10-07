<template>
  <form @submit="onSubmit">
    <textarea id="qb" v-model="qs" rows="6" required></textarea>
    <input type="submit" />
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'QueryBox',
  props: {
    default: String
  },
  data () {
    return {
      qs: this.default     
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      console.log(this.edgeField)
      console.log(this.qs)
      
      axios.post('/query', {
        qs: this.qs,
        edgeField: this.edgeField
      })
      .then(res => {
        console.log(res)
        this.$emit('result', res)
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
