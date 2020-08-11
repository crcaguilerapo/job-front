import Form from './components/form.js';
import Dashboard from './components/dashboard.js';
 
const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Form },
      { path: '/dashboard', component: Dashboard }
    ]
});

export default router;