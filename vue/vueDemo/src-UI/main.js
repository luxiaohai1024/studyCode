import  Vue from 'vue'
import App from './App.vue'
import {Button, Swipe} from 'mint-ui'

//注册成标签（全局注册）
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Button)

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
})