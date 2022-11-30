<template>
  <div class="main-panel">
    姓名：{{name}}
    年龄：{{cage}}
    <button @click="change">改变年龄</button>
    total:{{total}}
    <div>
      年龄：{{age}}
    </div>
    {{list.company}}
    <button @click="changeCompany">改变公司名称</button>

<!--    插槽-->
    <div>
      <slot>123</slot>
    </div>
    <input v-focus type="text">
    <div>
      <span>用户的名字为：{{$store.state.user.name}}</span>
      <span>用户的年龄为：{{$store.state.user.age}}</span>
    </div>
    <button @click="changeAge">改变年龄</button>
  </div>

</template>

<script>
export default {
  name: "page1",
  data(){
    return{
      name:'张三',
      age:18,
      cage:0,
      list:{
        company:'福莱易通',
        create:'2007',
      }
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  mounted() {
  },
  methods:{
    change(){
      this.cage = this.age++;
    },
    changeCompany(){
      this.list.company='flyedt'
    },
    changeAge(){
      this.$store.dispatch('user/changeAge')
    }

  },
  computed:{
    //计算属性是一个属性，不是方法，
    //若依赖数据不变，会缓存当前值
    //
    total(){
      return this.age+'c'
    }
  },
  watch:{
    //监听某一个变量
    age(newvalue,oldvalue){
      console.log("oldvalue:"+oldvalue,"newvalue:"+newvalue)
    },
    //监听一个对象
    list:{
      handler(newvalue,oldvalue){
        console.log("oldvalue:"+oldvalue,"newvalue:"+newvalue,this.list)
      },
      deep:true

    },
    //监听对象中的某一个值
    'list.company':{
      handler(newvalue,oldvalue){
        // console.log("oldvalue:"+oldvalue,"newvalue:"+newvalue,this.list)
      },

      //首次立即触发
      immediate:true
    }
  }
}
</script>

<style scoped>
.main-panel {
  font-size: 16px;
}
</style>
