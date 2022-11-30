export default {
    namespaced:true,
    state:{
        menuList:[
            {path: '/HomePage', name: '首页'},
        ]
    },
    mutations:{
        addMenu(state,dynamicTags,option){
            if(JSON.stringify(dynamicTags).indexOf(JSON.stringify(option))==-1){
                state.menuList.push(option); // 进行动态的操作
            }
        }
    },
    actions:{

    },
    modules:{}
}