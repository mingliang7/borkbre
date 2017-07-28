import App from './App.vue'
import router from './route';
import mixins from './mixins/index';
Vue.use(mixins);

new Vue(Vue.util.extend({ el: '#root', router }, App))

router.push('/')