import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        auth
    },
    state:{
      poi:'hello Vuex'
    },
    mutations:{
        //es6语法，等同edit:funcion(){...}
        edit(state){
            state.poi = 'hello x'
        },
        edita(state){
          state.poi="hello a"
        }
    },
    getters:{
      hello(state){
        return "name:"+state.poi
      }
    },
    actions:{
      helloa({commit}){
        setTimeout(()=>{
          commit('edita')
        },2000)
      }
    }
 })