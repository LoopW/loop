<template>
  <div class="tag-wrapper">
    <el-tag
        v-for="(tag,index) in dynamicTags"
        :class="['tag-style', $route.path === tag.path ? 'active' : '']"
        :key="index"
        :closable="tag.meta.closeX?false:true"
        :disable-transitions="false"
        @close="handleClose(tag)"
        size="medium">
      <router-link :to="tag.path">
        {{ tag.name }}
      </router-link>
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "Tagview",
  data() {
    return {
      dynamicTags: JSON.parse(localStorage.getItem('SdynamicTags')) || [],
      inputVisible: false,
      inputValue: '',
      SdynamicTags: 'SdynamicTags'
    };
  },
  watch: {
    //监听路由，获取新老路由信息
    // $router:{
    //   handler(val,oldval){
    //     console.log(val)
    //     console.log(oldval)
    //   },
    //   deep:true
    // },
    //监听路由变化触发方法
    '$route': 'createTag'
  },
  methods: {


    createTag() {

      const option = {
        path: this.$router.history.current.path,
        name: this.$router.history.current.meta.name,
        meta: this.$router.history.current.meta,
      }
      // 判断数组中是否包含某个对象，可以将数组和要检测的对象同时转换成字符串，然后用indexof
      if (JSON.stringify(this.dynamicTags).indexOf(JSON.stringify(option)) == -1) {
        this.dynamicTags.push(option); // 进行动态的操作
        localStorage.setItem(this.SdynamicTags, JSON.stringify(this.dynamicTags))
      }
    },
    handleClose(tag) {
      //在dynamicTags删除标签
      this.dynamicTags.forEach((item, index) => {
        if (item.name == tag.name) {
          this.dynamicTags.splice(index, 1);
        }
      })
      //因为此处是存储在loaclstorage中，改变了当前的要重新存一下
      localStorage.setItem(this.SdynamicTags, JSON.stringify(this.dynamicTags))
      //如果删除的是最后一个，则跳转到layout页
      if(this.dynamicTags.length===0) {
        return this.$router.push({
          path:'/HomePage'
        });
      }
      //如果关闭的是当前活动页，则跳到最后一个标签
      if (this.$route.fullPath == tag.path) {
        this.$router.push({
          //跳转路由对象的最后一个元素、两种方法
          // path: this.dynamicTags[this.dynamicTags.length-1].path
          path: this.dynamicTags.slice(-1)[0].path,
        });
      }


    },
  },
  created() {

  },
  mounted() {
    // console.log(this.dynamicTags,'---------')
  }
}
</script>

<style scoped>
.tag-style a {
  text-decoration: none;
}

.active a {
  color: #2E9EFF;
}

.active {
  color: #2E9EFF;
}

.tag-wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 16px;
  display: flex;
  align-items: center;

}

.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.router-link-active {
  text-decoration: none !important;
  color: #000000;
}
</style>
