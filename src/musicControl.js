window.onload = function(){
  var audio = document.getElementById('audio_switch')
  var music = document.getElementById('music')

  music.addEventListener('click',function(){
    if(audio.ended){
      audio.ended = false;
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