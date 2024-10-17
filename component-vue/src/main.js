import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);
//main.js provide기능을 사용하여 모든 컴포넌트에서 provide()함수로 정의한 데이터를 공유한다.
//app.provide(key,value);
app.provide('global Message','SSG-4th');
app.mount('#app');