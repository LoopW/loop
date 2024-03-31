<template>
  <div class="main-panel">
    <el-button type="text"
               @click="display()">
      打开嵌套表格的 Dialog
    </el-button>
    <div style="margin-bottom: 20px">
      <el-button type="warning" size="mini" @click="count+=2">count增加</el-button>
      count值：{{ count }}
    </div>
    <!--////////////////////////-->
    <!--父子组件通讯的第一种方式：
      父组件通过向子组件传递变量或者函数，子组件用props属性进行接收，
      变量用来展示数据  若要修改，子组件通过调用传过来的函数
      来操作父组件的函数进行修改
    -->
    <!--    <Dialog-->
    <!--        :dialogTableVisible = 'dialogTableVisible'-->
    <!--        :count="count"-->
    <!--        :decrease="decrease"-->
    <!--        :increase="increase"-->
    <!--    ></Dialog>-->
    <!--父子组件通讯的第二种方式 子传父
        子组件通过$emit发送给父组件函数名和参数
        父组件@函数名进行监听，操作父组件的变量改变从而更新子组件
    -->
    <!--    <Dialog-->
    <!--        :dialogTableVisible = 'dialogTableVisible'-->
    <!--        :count="count"-->
    <!--        @decrease="decrease1"-->
    <!--        @increase="increase1"-->
    <!--    ></Dialog>-->
    <!--父子组件通讯的第三种方式
    子组件设定v-model节点，父组件通过v-model来传递数据，放权子组件修改
    -->

    <!--        <Dialog-->
    <!--            :dialogTableVisible = 'dialogTableVisible'-->
    <!--            v-model="count"-->
    <!--        ></Dialog>-->
    <!--父子组件通讯的第四种方式 .sync修饰符  j讲一个以.sync的方式传到
        子组件，子组件通过props接收
    -->

    <Dialog
        :dialogTableVisible='dialogTableVisible'
        :num.sync="a"
    ></Dialog>


  </div>
</template>

<script>
import Dialog from "@/pages/views/components/Dialog"

export default {
  name: "page3",
  components: {
    Dialog,
  },
  data() {
    return {
      dialogTableVisible: false,
      count: 30,
      a:100,
    }
  },
  methods: {
    //显示弹窗
    display() {
      this.dialogTableVisible = true;
      console.log(this.dialogTableVisible)
    },
    //第一种
    increase() {
      this.count += 1;
    },
    decrease(value) {
      this.count -= 1;
    },
    //第二种
    increase1(value) {
      this.count += value;
    },
    decrease1(value) {
      this.count -= value;
    },
  },
  mounted() {

  }
}

</script>

<style scoped>
.main-panel {
  font-size: 16px;
}
</style>
