<template>
  <div class="main-panel">
    <div class="box"></div>
    <div class="content-box">
      <span>首页123</span>
    </div>
  </div>
</template>

<script>
import Layout from '@/layout/index'
// import * as http from '@/utils/api/majorApi.js'
// import * as http from '@/utils/api.js'
import arr from '@/utils/treeData'
export default {
    name: 'HomePage',
    components:{
      Layout,
    },
  data: function() {
    return {

    }
  },
  mounted() {

    this.treeDate = arr[0].rows;
    console.log( document.getElementsByTagName('html')[0].style['font-size'])
  },
  methods:{
    ChoiceEvent(index){
      this.headerListActive = index;
    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    },

    rowClick(row){
      if(row._parentId){
        window.open(`https://erp.flyedt.com/audit/QDMetro/WorkPoint/MapInfoIndex?pid=${row._parentId}&viewType=1&uid=System`);
      }
      else {
        window.open(`https://erp.flyedt.com/audit/QDMetro/WorkPoint/MapInfoIndex?pid=${row.Id}&viewType=1&uid=System`);
      }

    }
  }
}
</script>
<style scoped>
.main-panel{
  /*min-width: 1200px;*/
  /*width: 100%;*/
  height: 100%;
  box-sizing: border-box;
  padding: 1.5% 1.5% 2% 1.5%;
  /*background-image: url("~@/assets/img/data-img/background.png");*/
  background-size: 100% 100%;
  /*background-color: #2c3e50;*/

}
.content-box{
  margin-top: 10px;
}
.box{
  width: 200px;
  height: 200px;
  background-color: red;
}

</style>
