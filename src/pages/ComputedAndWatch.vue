<template>
<div class="main-panel">

  <div>
    <span>计算属性:</span>
    <div>年龄：{{total}}</div>
    <el-button type="primary" size="mini" @click="changeaNum1">改变年龄</el-button>
  </div>

</div>

</template>

<script>
export default {
  name: "Test",
  data(){
    return {
      name:"张三",
      age:13,
      hobby:['ball','gone','done'],
      address:{
        first:'青岛',
        second:'北京',
      },
      num1:6,
      num2:7,

    }
  },
  computed:{
    total:{
      get(){
        return this.num2 + this.num1
      },
      set(value){
        console.log("触发了set",this.num1,this.num2, value)
        this.total = value
      },
    },
  },
  methods:{
    changeaNum1(){
      this.num1+=2
    },
  },
  mounted() {

  },
}
</script>

<style scoped>

</style>
