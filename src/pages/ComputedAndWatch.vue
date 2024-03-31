<template>
  <div class="main-panel">

    <div>
      <span>计算属性:</span>
      <div>我是原始值：{{ age }}</div>
      <div>我是计算后的值：{{ total }}</div>
      <el-button type="primary" size="mini" @click="changeaTotal()">修改计算属性total的值</el-button>
<!--      <div>函数式调用方法计算的值：{{ likeComputed() }}</div>-->
      <el-button type="primary" size="mini" @click="changeaNum1()">改变年龄</el-button>
      <div>{{name}}</div>
      <el-button type="primary" size="mini" @click="changeaname()">改变姓名</el-button>
      <div>{{address.first}}</div>
      <el-button type="primary" size="mini" @click="changeadd()">改变地址</el-button>
      <div></div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      message: 'Hello',
      name: "张三",
      age: 13,
      hobby: ['ball', 'gone', 'done'],
      address: {
        first: '青岛',
        second: '北京',
      },
      num1: 6,
      num2: 7,
    }
  },
  //计算属性是vue实例的一个属性  他依赖缓存  当依赖值没有发生改变时，不会重新计算
  computed: {
    total: {
      // 当初次读取计算属性或者计算属性所依赖的数据发生变化时被调用，
      // getter函数有一个返回值，该返回值就是计算属性的值
      get(){
        return this.name + this.age
      },
      //当计算属性被修改时才会触发此函数，并不是依赖改变，而是变量本身
      set(value){
        console.log('computedSet'+value)
      },
    },
  },
  watch:{
    //监听器是vue实例的一个属性  需要再数据变化时执行异步或者开销较大时的异步
    //主要可以监听
    //1、data中的数据
    //2、监听路由等 this.$router
    //data中直接定义的对象
    name:{
      handler(newvalue,oldvalue){
        console.log("1"+newvalue)
        console.log("2"+oldvalue)
      },
      immediate:true,//首次监听
    },
    //检测对象中的属性  对象和数组都是复杂数据类型，复杂数据类型存的是地址值，
    // 地址没有变，不会触发watch。这时我们需要进行深度监听，
    // 就需要加上一个属性 deep，值设为 true，
    // 使用deep属性可以监测到整个对象所有属性值的变化，某个属性发生变化，watch都会触发监听该对象。
    'address.first':{
      handler(newvalue,oldvalue){
        console.log("add"+newvalue)
        console.log("add"+oldvalue)
      },
      immediate:true,//首次监听
      deep:true,//深度监听 监听对象中的属性
    },
    //监听路由的改变
    '$route':{
        handler(newvalue,oldvalue){
          console.log('$router')
          console.log(newvalue)
          console.log('$router'+oldvalue)
        },
      immediate:true,
      deep:true,
    },
  },
  methods: {
    changeaNum1() {
      this.age += 1;
      // this.num1 +=1
    },
    likeComputed(){
      return this.num1 + 1;
    },
    changeaname(){
      this.name+='1'
    },
    changeadd(){
      this.address.first='山东'
    },
    changeaTotal(){
      this.total = 'max'
    }
  },
  mounted() {

  },
}
</script>

<style scoped>

</style>
