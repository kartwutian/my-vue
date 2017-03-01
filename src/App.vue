<template>
  <div id="app" @touchstart="startX" @touchmove="endX" @touchend="slide" @mousedown="pcStartX" @mousemove="pcEndX" @mouseup="pcSlide">
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
        

      },
      x1: 0,
      x2: 0
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
      

      if(this.allComponents.indexOf(this.currentComponent) == this.allComponents.length-1){
        this.currentComponent = this.allComponents[0]
      }else{
        this.currentComponent = this.allComponents[this.allComponents.indexOf(this.currentComponent)+1]
      }
      
    }, 
    upPage: function(){
      // console.log(this.allComponents.indexOf(this.currentComponent))

      if(this.allComponents.indexOf(this.currentComponent) == 0 ){
        this.currentComponent = this.allComponents[this.allComponents.length-1]
      }else{
        this.currentComponent = this.allComponents[this.allComponents.indexOf(this.currentComponent)-1]
      }
      
    },
    startX: function(e){
      console.log(e.targetTouches[0].clientX)
      this.x1 = e.targetTouches[0].clientX
      this.x2 = e.targetTouches[0].clientX
    },
    endX: function(e){
      // console.log(e)
      this.x2 = e.targetTouches[0].clientX
    },
    slide: function(){
      var len = this.x2-this.x1
      console.log(this.x2,this.x1,len)
      

      if( len < -50 ){
        this.nextPage()
        this.x1 = 0
        this.x2 = 0
      }else if ( len > 50 ){
        this.upPage()
        this.x1 = 0
        this.x2 = 0
      }
    },
    pcStartX: function(e){
      console.log(e)
      this.x1 = e.clientX
      this.x2 = e.clientX
    },
    pcEndX: function(e){
      this.x2 = e.clientX
    },
    pcSlide: function(e){
      console.log(e)
      var len = this.x2-this.x1
      console.log(this.x2,this.x1,len)
      

      if( len < -50 ){
        this.nextPage()
        this.x1 = 0
        this.x2 = 0
      }else if ( len > 50 ){
        this.upPage()
        this.x1 = 0
        this.x2 = 0
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
