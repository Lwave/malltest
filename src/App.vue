<template>
  <div id="app">
    {{result}}
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    data() {
      return {
        result: ''
      }
    },
    created() {
      axios({
        url: 'http://123.207.32.32:8000/home/multidata',
      }).then(res => {
        this.result = res
      })
    }
  }
</script>

<style>

</style>
