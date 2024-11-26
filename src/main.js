import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
store.dispatch("initStore", "https://timur0108.github.io/WADkodutooAPI/myjson.json")