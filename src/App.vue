<template>
  <div id="app">
    <ul>
      <!-- 直接link到子组件，否则点击后显示不出子组件 -->
      <router-link to="QRcode">
        <li @click='goHello'>
          <h3>Hello</h3>
        </li>
      </router-link>
      <router-link to="VFor">
        <li>
          <h3>v-for</h3>
        </li>
      </router-link>
      <router-link to="ScrollTopA">
        <li>
          <h3>ScrollTop</h3>
        </li>
      </router-link>
      <router-link to="Scroll">
        <li>
          <h3>Scroll</h3>
        </li>
      </router-link>

    </ul>
    <router-view ></router-view>  
  </div>
</template>

<script>
export default {
  created(){
    // 直接路由到子组件 否则router-link-active 无法在父组件生效
    this.$router.push('/QRcode')
  },//created end

  methods:{
    goHello(){
      console.log('hello')
      this.$router.push('/Hello')
    }
  },//methods end
}

</script>

<style scoped>
/*设置router-link选中的样式*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:16px;
}
ul{
  text-align:left;
  border-bottom: 2px solid #B9B9B9;
  padding: 3px 10px;
  height:50px;
  line-height: 50px;
}
li {
  display: inline-block;
  margin-right:10px;
  border-right: 1px solid #DEDCDC;
  padding-right:10px;
}
</style>
