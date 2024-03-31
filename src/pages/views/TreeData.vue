<template>
  <div class="main-panel">
    <el-tree
        :data="treeDate"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        :props="defaultProps">
    </el-tree>
  </div>
</template>

<script>
export default {
  name: "page2",
  data() {
    return {
      data: [
        {
          id: 1,
          label: '一级 1',
          children:
              [
                {
                  id: 4,
                  label: '二级 1-1',
                  children:
                      [
                        {
                          id: 9,
                          label: '三级 1-1-1'
                        },
                        {
                          id: 10,
                          label: '三级 1-1-2'
                        }
                      ]
                }
              ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      //平行结构
      lineDate: [
        {pid: 0, id: 1, label: '总公司'},
        {pid: 3, id: 2, label: '人事部-1'},
        {pid: 1, id: 3, label: '人事部'},
        {pid: 1, id: 4, label: '采购部'},
        {pid: 1, id: 5, label: '组织部'},
        {pid: 4, id: 6, label: '普通部'},
        {pid: 6, id: 7, label: '1部'},
      ],
      //属性结构
      treeDate: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted() {
    // this.numberto(7532)
    this.treeDate = this.listToTree(this.lineDate)
    console.log(this.treeDate)
    console.log('-----------')
    console.log(this.toTree(this.lineDate))

  },
  methods: {
    numberto(num) {
      if (num > 10) {
        console.log(num % 10)
        this.numberto(num / 10)
      }else {
        console.log(Number(num % 10))
      }
    },
    //数组转树
    listToTree(list) {
      return list.filter(cur => {
        let children = list.filter(item => item.pid == cur.id)
        if (children.length > 0) {
          cur.children = children
        }
        return cur.pid == 0
      })
    },
    //2
    toTree(data) {
      let result = []
      if (!Array.isArray(data)) {
        return result
      }
      data.forEach(item => {
        delete item.children;
      });
      let map = {};
      data.forEach(item => {
        map[item.id] = item;
      });
      data.forEach(item => {
        let parent = map[item.pid];
        if (parent) {
          (parent.children || (parent.children = [])).push(item);
        } else {
          result.push(item);
        }
      });
      return result;
    },
    //树转数组
    TreeToList(){
      //稍后再试
    }
  }
}
</script>

<style scoped>
.main-panel {
  font-size: 16px;
}
</style>
