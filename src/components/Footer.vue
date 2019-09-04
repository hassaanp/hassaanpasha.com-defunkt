<template>
  <div>
    <div class="triangle-left"></div>
    <span>poop</span>
  </div>
    <!--<div class="Footer">-->
    <!--<div>Work</div>-->
    <!--<div>Life</div>-->
    <!--<div>Blog</div>-->
  <!--</div>-->
</template>

<script>
  export default {
    name: 'Footer',
    data: function () {
      return {
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .triangle-left {
    color: white;
    width: 120px;
    height: 0px;
    border-left: solid 170px #30353A;
    border-bottom: solid 120px transparent;
    border-top: solid 120px transparent;
  }
  /*.Footer{*/
    /*background-color: #30353A;*/
    /*color: white;*/
    /*height: 30%;*/
  /*}*/
</style>
