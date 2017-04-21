<template>
  <div class="hello">
    <h4>记录Vue踩过的坑</h4>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  created(){
    this.$router.push('/QRcode')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h4 {
  padding: 1rem;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
