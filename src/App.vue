<template>
  <div id="app" >
    <!-- <img src="./assets/logo.png" class="logo"> -->
    <!-- <router-view></router-view> -->

    <music :style="styleObj" ></music>
    
    <transition name="component-fade" mode="out-in">
      <component :is="currentComponent"></component>
    </transition>
    

  </div>
</template>

<script>

// 解决fixed自适应问题，fixed总是相对于body定位，以下设置控制fixed的music元素总是在view内
var deviceWidth = document.getElementsByTagName("body")[0].getBoundingClientRect().width;
var dpr = window.devicePixelRatio;
var marginR = 0;
if (deviceWidth / dpr > 540) {
    marginR = parseInt((deviceWidth - 540)/2)

    console.log(marginR)

  }

import avatar from './components/avatar.vue'
import music from './components/music.vue'
import skills from './components/skills.vue'
import demos from './components/demos.vue'
import evalution from './components/evalution.vue'

export default {
  
  data (){
    return {
      allComponents:['avatar','skills','demos','evalution'],
      currentComponent: 'avatar',
      styleObj: {
        marginRight: marginR+'px'
      }
    }
  },
  
  name: 'app',
  components:{
    avatar,
    music,
    skills,
    demos,
    evalution
  },
  methods: {
    nextPage: function(){
      console.log(this.allComponents.indexOf(this.currentComponent))

      if(this.allComponents.indexOf(this.currentComponent) == this.allComponents.length-1){
        this.currentComponent = this.allComponents[0]
      }else{
        this.currentComponent = this.allComponents[this.allComponents.indexOf(this.currentComponent)+1]
      }
      
    }, 
    upPage: function(){
      console.log(this.allComponents.indexOf(this.currentComponent))

      if(this.allComponents.indexOf(this.currentComponent) == 0 ){
        this.currentComponent = this.allComponents[this.allComponents.length-1]
      }else{
        this.currentComponent = this.allComponents[this.allComponents.indexOf(this.currentComponent)-1]
      }
      
    } 
  },
  mounted: function(){
    console.log(this.$root.$el)
    var startX , endX, len ;
    var _this = this
    this.$root.$el.ontouchstart = function(e){
      // console.log(e.targetTouches[0].clientX)
      startX = e.targetTouches[0].clientX
    }
    // this.$root.$el.ontouchend = function(e){
    //   console.log(e)
    // }
    this.$root.$el.ontouchmove = function(e){
      // console.log(e.targetTouches[0].clientX)
      endX = e.targetTouches[0].clientX
      len = endX-startX
      // console.log(endX-startX)
    }

    this.$root.$el.ontouchend = function(){
      if(len < -20){
        _this.upPage();
        startX = 0
        endX = 0
        len = 0
      }else if(len > 20) {
        _this.nextPage();
        startX = 0
        endX = 0
        len = 0
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(198, 241, 233);
  min-height: 100%;
  height: 100%;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-active {
  opacity: 0;
}
</style>
