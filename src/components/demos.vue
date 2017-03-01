<template>
  <div class="demos">
    <header>demos</header>
    <div>
      <ul>
        <li>
          <a href="https://kartwutian.github.io/prizeGetDemo/html/prize-draw.html">
            用mvc写的一个抽奖demo
          </a>
        </li>
        
        <li>
          <a href="https://kartwutian.github.io/re-work/html/re-index.html">
            一个仿轻松筹的移动web首页
          </a>
        </li>
        <li>
          <a href="http://zc.weiai.gs/">
            微爱筹项目，负责移动端前端开发，还未全部上线
          </a>
        </li>
        <li>
          <a href="https://kartwutian.github.io/address-storage/order-info.html">
            之前写的地址选择jquery插件
          </a>
        </li>
        
        <li>
          <a href="https://kartwutian.github.io/canvas-demos/canvas-demo44.html">
            一个canvas demo，点击图片，显示放大镜，pc上查看
          </a>
        </li>
      </ul>
    </div>
  </div>
    
  
</template>

<script>


export default {
  name: 'demos'
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demos{
  background-color: rgb(198, 241, 233);
}
.demos header{
  padding-top: 0.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 2em;
  text-align: center;

}
.demos ul{
  margin-top: 0.2rem;
  margin-left: 0.4rem;
  border-left: 1px solid rgba(255,0,0,.5);
}
.demos ul>li{
  padding: 0.1rem 0.2rem ;
  line-height: 2em;
  position: relative;
}
.demos ul>li:before{
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
.demos ul>li a{
  color: rgba(102, 153, 204, 1);
}
</style>
