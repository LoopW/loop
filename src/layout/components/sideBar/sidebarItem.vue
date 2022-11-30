<template>
  <div>
    <template v-for="(routeItem,routeIndex) in routerList">
      <el-submenu :key="routeIndex"
                  v-if="routeItem.children&&routeItem.children.length>0"
                  :index="routeItem.path"
      >
        <template slot="title">
            <i :class="routeItem.meta.icon"></i>
          <span>{{routeItem.meta.name}}</span>
        </template>
        <el-menu-item-group>
          <sidebar-item
              :routerList="routeItem.children"
              :basePath="
              basePath.length > 0
                ? basePath + '/' + routeItem.path
                : routeItem.path
            "
          ></sidebar-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item
          :key="routeIndex"
          v-if="
          routeItem.children &&
          routeItem.children.length <= 0 &&
          routeItem.meta.showFlg
        "
          :index="resolvePath(routeItem.path)"
      >
        <i :class="routeItem.meta.icon"></i>
        <template #title>{{ routeItem.meta.name }}</template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import sidebarItem from "@/layout/components/sideBar/sidebarItem";
export default {
  name: "sidebarItem",
  components:{
    sidebarItem
  },
  props:{
    routerList:{
      type:Array,
      default:[],
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  mounted() {
    // console.log(this.routerList)
  },
  methods:{
    resolvePath(routePath) {
      let hasBasePath = this.basePath ? this.basePath : "";
      return hasBasePath ? `${hasBasePath}/${routePath}` : `${routePath}`;
    },
  },

}
</script>

<style scoped>

</style>
