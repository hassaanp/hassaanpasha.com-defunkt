<template>
  <div class="hello">
    <h1 xs12>Hassaan Pasha</h1>
    <p class='sub'></p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sub:before{
    content:'<think>';
    animation-name: head;
    animation-duration: 15s;
    animation-iteration-count: infinite;
  }
  @keyframes head {
    0% {content:'<think>'}
    12% {content:'<design>'}
    24% {content: '<code>'}
    36% {content:'<deploy>'}
    48% {content: '<secure>'}
    60% {content:'<automate>'}
    72% {content: '<chill>'}
    86% {content: '<repeat>'}
    100% {content: '<think>'}
  }
</style>
