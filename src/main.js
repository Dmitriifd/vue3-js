import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import components from './components/UI/index'
import router from './router/router';
import VIntersection from './directives/VIntersection';
import direstives from './directives/index'

const app = createApp(App);

direstives.forEach(directive => {
  app.directive(directive.name, directive);
})

components.forEach((component) => app.component(component.name, component));

app
  .use(router)
  .mount('#app')
