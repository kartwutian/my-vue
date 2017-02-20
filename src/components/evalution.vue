<template>
  <div class="evalution">
    <header>evalution</header>
    <div>
      <ul>
        <li>
          一年的前端经验,主要是移动端web开发
        </li>
        <li>
          期待往node.js方向发展
        </li>
        <li>
          一步步走在全的栈路上
        </li>
        
        
      </ul>

      <div class="info">
        tel: 15214708725 
      </div>
      <div class="info">
        email: 805774059@qq.com
      </div>
    </div>
  </div>
    
  
</template>

<script>


export default {
  name: 'evalution'
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.evalution{
  background-color: rgb(198, 241, 233);
}
.evalution header{
  padding-top: 0.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 2em;
  text-align: center;

}
.evalution ul{
  margin-top: 0.2rem;
  margin-left: 0.4rem;
  border-left: 1px solid rgba(255,0,0,.5);
}
.evalution ul>li{
  padding: 0.1rem 0.2rem ;
  line-height: 2em;
  position: relative;
}
.evalution ul>li:before{
  position: absolute;
  content: '';
  width: 0.1rem;
  height: 0.1rem;
  left: -0.05rem;
  top: 0;
  bottom: 0;
  margin: auto;
  line-height: 2em;
  border-radius: 50%;
  background: #ec8445;
}

.evalution .info{
  text-align: center;
  line-height: 0.4rem;
  font-size: 1.2em;
  color: #ec8445;
}
.evalution .info:first-of-type{

  margin-top: 0.4rem;
}
</style>
