export default {
    namespaced:true,
    state:{
        name:'张三',
        age:18,
    },
    mutations:{
        _CHANGE_AGE(state,num){
            state.age+=1;
        }
    },
    actions:{
        changeAge(context,num){
            context.commit('_CHANGE_AGE')
        }
    },
    getters:{

    },
    modules:{

    }
}
