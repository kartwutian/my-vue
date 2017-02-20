<template>
  <div class="skills">
    <header>skills</header>
    <div>
      <ul>
        <li>熟练使用html，css，javascript，熟悉常见es6新功能</li>
        <li>熟练掌握jquery库</li>
        <li>熟练使用前端模块化，工程化工具webpack,自动化工具gulp,css预处理器Less</li>
        <li>玩过bootstrap， weui ，amaze UI 等UI框架</li>
        <li>玩过handlebars，juice，jade模板</li>
        <li>熟悉vue.js，最近在研究</li>
        <li>熟悉node.js, express框架</li>
        <li>熟悉git做版本管理</li>
        <li>熟悉移动端web开发</li>
      </ul>
    </div>
  </div>
    
  
</template>

<script>


export default {
  name: 'skills'
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skills{
  background-color: rgb(198, 241, 233);
}
.skills header{
  padding-top: 0.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 2em;
  text-align: center;

}
.skills ul{
  margin-top: 0.2rem;
  margin-left: 0.4rem;
  border-left: 1px solid rgba(255,0,0,.5);
}
.skills ul>li{
  padding: 0.1rem 0.2rem ;
  line-height: 2em;
  position: relative;
}
.skills ul>li:before{
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
</style>
