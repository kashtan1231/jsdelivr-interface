import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import InstantSearch from 'vue-instantsearch/vue3/es'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(InstantSearch)

app.mount('#app')
