<template>
  <div class = "guide">
    <div class="line"></div>
    <div class="avatar">
      <img class="avatar_img" src="../assets/avatar.jpg">
          
    </div>
    <div class="info">
      <h1 class="occupation"> {{ occupation }} </h1>
      <p class="my_name"> {{ name }} </p>
    </div>
    
  </div>
  
</template>

<script>
export default {
  name: 'avatar',
  data () {
    return {
      occupation: '前端工程师',
      name: '鲍华增'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.guide{
  position: relative;
  width: 100%;
  height: 100%;
  background: #ccc url('../assets/p1_bg.jpg') no-repeat top center;
  background-size: 100%;
}
.line{
  position: absolute;
  left: 50%;
  width: 0.01rem;
  background: #f00;
  height: 50%;

}
.avatar{
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

  /*animation: lighting 2s linear infinite alternate;*/
}
.avatar:before{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  content: "";
  margin: auto;
  width: 1.0rem;
  height: 1.0rem;
  background: #d60b3b;
  opacity: .5;
  box-shadow: 0 0 0.375rem 0.375rem #d60b3b;
  border-radius: 50%;
  z-index: -1;
  animation: lighting 0.5s infinite alternate;
}
.avatar .avatar_img{
  border-radius: 50%;
  animation: go 5s linear infinite; 
}

@keyframes go{
  0%{
    transform: rotate(0deg);
    }
  100%{
    transform: rotate(360deg);
    }
}
@keyframes lighting{
  0% {
      /* style */
      opacity: 1;
      transform: scale(0.8,0.8);
    }
    100% {
      /* style */
      opacity: 0.5;
      transform: scale(1.2,1.2);
    }
}
.info {
  position: absolute;
  width: 100%;
  bottom: 0.4rem;
  font-size: 2.5em;
  color: #ec8445;
  text-align: center;
}
.info .my_name{
  font-size: 0.5em;
  color: #ec3333;
}
</style>
