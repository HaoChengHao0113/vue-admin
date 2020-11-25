import Vue from 'vue';
import VueX from 'vuex';
Vue.use(VueX);

const store = new VueX.Store({
    state: {
        token: 'yrz199710166064',
        name: 'zhangsan'
    },
    getters: {
        getChangeName(getters){
            console.log('getters',getters);
        }
    },
    actions: {
        changeName(context){
            console.log('context', context)
        },
        nameChange1(state, name){

            state.commit('nameChange', name)
        }
    },
    mutations: {
        nameChange(state, {name}){
            state.name = name
        }
    },
    modules: {},
})
export default store