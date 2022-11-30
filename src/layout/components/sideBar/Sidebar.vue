<template>
<div class="main-panel">
  <div class="show-collapse-btn" @click="isCollapse=!isCollapse" >
    <div class="icon-style el-icon-s-fold"  v-if="isCollapse"></div>
    <div class="icon-style el-icon-s-unfold" v-else></div>
  </div>
  <!--菜单部分-->
  <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="selectMenu"
      :collapse="isCollapse"
      router
      :unique-opened="true"
  >
    <sidebarItem
      :routerList="routes"
    />
  </el-menu>

</div>
</template>

<script>
import sidebarItem from "@/layout/components/sideBar/sidebarItem";
export default {
  components:{
    sidebarItem
  },
  name: "Sidebar",
  //接收父组件传递过来的路由对象值
  props:{
    routes: {
      type: Array,
    }
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath,1);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath,2);
    },
    selectMenu(){
      // console.log(3)
    }
  },
  mounted() {

    // console.log(this.routes)
    // console.log(this.$router)

  }
}
</script>
<style>

.el-menu--collapse .el-submenu__title span{
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
.el-menu--collapse .el-submenu__icon-arrow{
  display: none;
}
</style>

<style scoped>
.main-panel{
  height: 100%;
  display: flex;
  flex-direction: column;
}

.el-menu-vertical-demo{
  flex-grow: 1;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.icon-style{
  color: #999;
  font-size: 20px;
  cursor: pointer;
}
.show-collapse-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  height: 38px;
}

</style>
