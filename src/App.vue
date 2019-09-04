<template>
  <div id="app">
    <router-view/>
    <Terminal></Terminal>
    <!--<Footer></Footer>-->
  </div>
</template>

<script>
  import Terminal from "./components/Terminal.vue"
  import Footer from "./components/Footer.vue"
  export default {
  name: 'app',
    data: function(){

    },
    components: {"Terminal":Terminal, "Footer":Footer}
}

</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.stick-to-bottom{
  bottom:0;
  position: absolute;
  left:0;
  right:0;
}
/*Footer {*/
  /*position: absolute;*/
  /*bottom: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*height: 50px;*/
/*}*/
</style>
