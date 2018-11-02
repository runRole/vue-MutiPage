<template>
  <div id="app">
    <div class="game_info-wrap">
			<div class="game_info_left">
				<div class="signup_amount">报名人数人</div>
				<div class="already_signup_amount">上届参与过人数145人</div>
			</div>
		</div>
    <hello></hello>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import { queryProject } from '../../service/getData'
  import Hello from 'components/Hello/Hello'

  export default {
    name: 'app',
    components: {
      Hello
    },
    created() {
        //this.getData();
        this.getProject();
    },
    methods: {
      getProject(){
        queryProject();
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
