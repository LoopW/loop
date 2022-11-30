<template>
  <div class="main-panel">
    <h1>SHOUYE</h1>
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
      Layout
    },
  data: function() {
    return {

      headerList:[
        {
          id:0,
          name:'系统设置'
        },
        {
          id:1,
          name:'项目管理'
        },
        {
          id:2,
          name:'控制价管理'
        },
        {
          id:3,
          name:'合同管理'
        },
        {
          id:4,
          name:'中标价管理'
        },
        {
          id:5,
          name:'量价核算'
        },
        {
          id:6,
          name:'合同预付款'
        },
        {
          id:7,
          name:'计量支付'
        },
        {
          id:8,
          name:'文件管理'
        },
      ],
      headerListActive:0,
      currentPage4:1,
      treeDate:[],
    }
  },
  mounted() {
    this.treeDate = arr[0].rows;
    // http.login(this.par).then(res=>{
    //     console.log(1)
    // }).catch(err=>{
    //   console.log(2)
    // })
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
  background-color: #2c3e50;

}

</style>
