<template>
    <div class="main-panel">
      <!--主页头部-->
      <div class="header">
        <Header></Header>
      </div>
      <!--内容展示面板-->
      <div class="panel">
      <!--菜单侧边栏-->
        <div class="side-menu">
          <Sidebar
            :routes="staticRoutes"
            @GetRouterName="GetEmitRouterName"
          ></Sidebar>
        </div>
        <div class="content-panel">
          <!--标签部分-->
          <div class="Tag-area">
            <Tagview></Tagview>
          </div>
          <!--内容展示部分-->
          <div class="content">
            <router-view></router-view>
          </div>
          <!--底部-->
          <div class="footer">
            <Pagination
                :limit.sync="paginaObj.size"
                :page.sync="paginaObj.current"
                :total="paginaObj.total"
                @pagination="HttpGetListEvent()"
            />
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import Header from './components/header';
import Sidebar from "@/layout/components/sideBar/Sidebar";
import Tagview from "@/layout/components/tagView/Tagview";
import {staticRoutes} from "@/router/staticRoutes/index.js";
import Pagination from "@/pages/views/components/Pagination";
export default {
    name: 'Layout',
    components:{
      Header,
      Sidebar,
      Tagview,
      Pagination

    },
    data(){
      return{
        staticRoutes,
        paginaObj: {
          current: 1,
          size: 10,
          total: 1000,
        },

      }
    },
    methods:{
      GetEmitRouterName(name) {
        data.activeRouteName = name
      },
      HttpGetListEvent(){
        console.log("调用分页接口")
      },
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>

.main-panel {
  height: 100%;
  /deep/ .el-menu-item{
    font-size: 16px;
  }
}
.header{
  height: 60px;
  width: 100%;
}
.panel{
  height: calc(100vh - 60px); /*60 头部导航高度*/
  width: 100%;
  background-color: white;

  overflow: hidden;
  display: flex;
}
.side-menu{
  height: calc(100vh - 60px); /*60 头部导航高度*/
  background-color: white;
}
.content-panel{
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;

}
.Tag-area{
  /*background-color: #2c3e50;*/
  /*box-sizing: border-box;*/
  /*padding: 5px 0 3px 10px;*/
  height: 40px;
}
.content{
  height: calc(100vh - 100px);
  width: 100%;
  min-width: 1200px;
  border-top: 1px solid #eeeeee;
}
.footer{
  height: 60px;
  //background-color: lightgray;
  display: flex;
  background-color: #eeeeee;
  align-items: center;
  /*background-color: red;*/
}

</style>
