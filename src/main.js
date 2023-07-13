import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import { createPinia } from 'pinia'

const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#2196F3",
        }
      },
    },
  },
})

const app = createApp(App)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
// createApp(App).mount('#app')
