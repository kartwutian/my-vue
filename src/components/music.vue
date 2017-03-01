<template>
  <div class="music" >
    <img id="music" src="../assets/music_disc.png" alt="">
    <img src="../assets/music_pointer.png" alt="">
    <audio id="music_switch" >
      <source src="static/mp3/when love coming.mp3" type="audio/mpeg">
    </audio>
  </div>
    
  
</template>

<script>
export default {
  name: 'music',
  mounted: function(){
    var audio = document.getElementById("music_switch")
    var music = document.getElementById("music")
    // console.log(audio,music)
    audio.addEventListener('ended',function(){
      music.className = ''
      
    })
    music.addEventListener('click',function(e){
      e.stopPropagation()
      this.autoplay = true
      if(audio.ended){
        audio.play();
        this.className = 'play'
      }else{
        if(audio.paused){
          audio.play();
          this.className = 'play'
        }else{
          audio.pause();
          this.className = ''
        }
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.music{
  position: fixed;
  top:0.1rem;
  right: 0.1rem;
  width: 0.5625rem;
  height: 0.5625rem;
  border: 0.04rem solid #ef1639;
  border-radius: 50%;
  background: #fff;
  z-index: 5;
}
.music img:first-of-type{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 80%;
}
.music img:last-of-type{
  position: absolute;
  width: 30%;
  top: 20%;
  right: 2.5%;
}
.music img.play{
  animation: music_disc 4s linear infinite;
}
@keyframes music_disc {
  0% {
    /* style */
    transform:rotate(0deg);
  }
  
  100% {
    /* style */
    transform: rotate(360deg);
  }
}
</style>