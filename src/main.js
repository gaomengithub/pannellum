import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { Button, FloatingPanel, Image} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(FloatingPanel);
app.use(Button);
app.use(Image)
app.mount('#app')
// createApp(App).mount('#app')
