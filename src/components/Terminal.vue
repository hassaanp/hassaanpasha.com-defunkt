<template>
  <div>
    <div class="terminal-window">
      <header>
        <div class="button green"></div>
        <div class="button yellow"></div>
        <div class="button red"></div>
      </header>
      <section class="terminal">
        <div class="history"></div>
        $&nbsp;<span class="prompt"></span>
        <input type="text" class="terminal-input" id="terminal-input">
        <span class="typed-cursor"></span>
      </section>
    </div>
    <!-- data -->
    <div class="terminal-data featured-skills-output">
      <br>Primary Skills<br>
      ----------------------------------------------<br>
      Featured: Backend Development and DevOps  <span class="gray"># My featured skills</span><br><br>

      &nbsp;&nbsp;Significant expertise with these technologies<br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">NodeJS: 8.x,10.x,12.x</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Firebase: Functions, Realtime DB, Hosting</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Data Analytics: BigQuery, Google PubSub, Kubernetes Engine, Segment, Keen.io</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Cloud Computing: Worked on GCE primarily with some exposure to AWS: Lambda, Dynamo, EC2, ELK</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Container Orchestration: Kubernetes, Mesos/DCOS, Marathon</span><br>
      <br>
    </div>
    <div class="terminal-data dev-skills-output">
      <br>Other Skills<br>
      ----------------------------------------------<br>
      <span class="gray"># What else do I know?</span><br><br>
      &nbsp;&nbsp;Extensive experience with building and managing production ready applications across various niche using<br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Web Front-end: HTML, CSS, Bootstap, Angular, Vue</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">CI/CD: BitBucket, Github, Bitbucket Pipelines, Gitlab, Jenkins, Netlify</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Project Management: Jira, Confluence, Asana, Trello, Slack, Gitlab</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Documentation: JSDocs, Swagger</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Servers: Linux, Dockers, LetsEncrypt, PM2, Stackdriver, Logstash</span><br>
      <br>
    </div>
  </div>
</template>

<style scoped>
  body {
    background: #6D7074;
  }


  .terminal-window {
    text-align: left;
    width: 600px;
    height: 360px;
    border-radius: 10px;
    margin: auto;
    position: relative;
  }

  .terminal-window header {
    background: #E0E8F0;
    height: 30px;
    border-radius: 8px 8px 0 0;
    padding-left: 10px;
  }

  .terminal-window header .button {
    width: 12px;
    height: 12px;
    margin: 10px 4px 0 0;
    display: inline-block;
    border-radius: 8px;
  }

  .terminal-window header .button.green {
    background: #3BB662;
  }

  .terminal-window header .button.yellow {
    background: #E5C30F;
  }

  .terminal-window header .button.red {
    background: #E75448;
  }

  .terminal-window section.terminal {
    color: white;
    font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
    font-size: 11pt;
    background: #30353A;
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    top: 30px;
    bottom: 0;
    overflow: auto;
  }

  .terminal-input{
    background: #30353A;
    border: none;
    min-width:1px!important;
    max-width:99.99%!important;
    transition: width 0.25s;
    text-align:left;
  }

  .terminal-window section.terminal .typed-cursor {
    opacity: 1;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
  }
  @keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
  @-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
  @-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }

  .terminal-data { display: none; }
  .terminal-window .gray { color: gray; }
  .terminal-window .green { color: green;}
</style>

<script>
//  import * as $ from "../../node_modules/jquery"
//  import * as Typed from '../../node_modules/typed.js'
  export default {
    name: 'Terminal',
    data: function () {
      return {
      }
    },

    mounted: function(){
      function runScripts(data, pos) {
        var prompt = $('.prompt'),
          script = data[pos];
        if(script.clear === true) {
          $('.history').html('');
        }
        switch(script.action) {
          case 'type':
            // cleanup for next execution
            prompt.removeData();
            $('.typed-cursor').text('');
            prompt.typed({
              strings: script.strings,
              typeSpeed: 30,
              callback: function() {
                var history = $('.history').html();
                history = history ? [history] : [];
                history.push('$ ' + prompt.text());
                if(script.output) {
                  history.push(script.output);
                  prompt.html('');
                  $('.history').html(history.join('<br>'));
                }
                // scroll to bottom of screen
                $('section.terminal').scrollTop($('section.terminal').height());
                // Run next script
                pos++;
                if(pos < data.length) {
                  setTimeout(function() {
                    runScripts(data, pos);
                  }, script.postDelay || 1000);
                }
              }
            });
            break;
          case 'view':

            break;
        }
      };
      $(function() {
        var data = [
          {
            action: 'type',
            strings: ["sudo apt install hassaan^400"],
            output: '<span class="gray">+hassaan@0.1.2 installed</span><br>&nbsp;',
            postDelay: 1000
          },
          {
            action: 'type',
            clear: true,
            strings: ['ls /usr/skills/featured^400'],
            output: $('.featured-skills-output').html(),
            postDelay: 4000
          },
          {
            action: 'type',
            strings: ['ls /usr/skills/others^400'],
            output: $('.dev-skills-output').html()
          }

        ];
        runScripts(data, 0);
      });
      function resizable (el, factor) {
        var int = Number(factor) || 7.7;
        function resize() {el.style.width = ((el.value.length+1) * int) + 'px'}
        var e = 'keyup,keypress,focus,blur,change'.split(',');
        for (var i in e) el.addEventListener(e[i],resize,false);
        resize();
      };
      //this.scriptData();
      if(document.getElementById('terminal-input')) {
        resizable(document.getElementById('terminal-input'), 1);
      }
    },
    methods:{
    }
  }

</script>
