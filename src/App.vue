<template>
  <div id="app">
    <router-view v-if="$route.path === '/login'||$route.path === '/demo' ||
     $route.path === '/demo2'|| $route.path === '/demo3'|| $route.path === '/demo4'"/>
    <layout v-else />
  </div>
</template>

<script>
import layout from "@/layout/index";

export default {
  name: 'App',
  components:{
    layout
  },
}
</script>

<style>
/*引入字体及阿里巴巴iconfont字体图标*/
@import "~assets/iconfont/iconfont.css";
@import "~assets/fontText/fontText.css";

* {
  margin: 0;
  padding: 0;
  font-family: PuHuiTiRegular;
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
