<template>
  <div id="app">
    <ul>
      <router-link to="Hello">
        <li>
          <h3>Hello</h3>
        </li>
      </router-link>
      <router-link to="VFor">
        <li>
          <h3>v-for</h3>
        </li>
      </router-link>


  <!-- 测试git -->
      <router-link to='GitTest'>
        <li>
          <h3>Git test</h3>
        </li>
      </router-link>
    </ul>
    <router-view ></router-view>  
  </div>
</template>

<script>
export default {
  created(){
    this.$router.push('/Hello')
  }
}
</script>

<style scoped>
/*设置router-link选中的样式*/
.router-link-active{
  color:#f00;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:16px;
}
*{
  margin: 0;
  padding:0;
}
ul{
  text-align:left;
  border-bottom: 2px solid #B9B9B9;
  padding: 3px 0;
  height:50px;
  line-height: 50px;
}
li {
  list-style: none;
  display: inline-block;
  margin-right:10px;
  border-right: 1px solid #DEDCDC;
  padding-right:10px;
}

</style>
