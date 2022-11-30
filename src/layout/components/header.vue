<template>
  <div class="header">
    <div class="header-content">
      <div class="title">
        <span>专家管理系统</span>
      </div>
      <div class="info">
        <div class="name">
          <i class="el-icon-user-solid space"></i>
          <span>欢迎您，XXX</span>
        </div>
        <div class="exit">
          <i class="el-icon-switch-button space"></i>
          <span @click="ExitEvent()">退出</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {removeToken, removeCookie} from "@/utils/auth";

export default {
  name: "Header",
  methods: {
    ExitEvent() {
      this.$confirm({message: "确定要退出吗？", title: "提示"}, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        removeToken();
        removeCookie("usersId");
        removeCookie("username");
        this.$router.replace("/login");
        this.$message({
          type: 'success',
          message: '退出成功!'
        });
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });
          });
    },
  },


}
</script>

<style scoped>
.header {
  color: white;
  height: 100%;
  background-color: #082880;
  font-size: 20px;
  font-family: PuHuiTiBold;
}

.header-content {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

.info {
  display: flex;
  font-size: 16px;
}

.exit {
  margin-left: 10px;
  cursor: pointer;
}

.space {
  margin-right: 3px;
}
</style>
