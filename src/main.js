import Vue from 'vue';
import App from './App.vue'
import TodoItem from './components/TodoItem.vue'
Vue.component('todo-item', TodoItem)

const app = new Vue({
  render: h => h(App)
}).$mount('#app')
console.log("app",app)