import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/FormData';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FormData',
      component: FormData,
    },
  ],
});
