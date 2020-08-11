
import router from './routes.js' 

 
new Vue({
  router,
  el: '#app',
  data: {
    msg: 'Hello World'
  },
  mounted() {
    let form = document.getElementById("route-form"); 
    form.addEventListener("click", function() { router.push({ path: '/' }); }, false);

    let dashboard = document.getElementById("route-dashboard"); 
    dashboard.addEventListener("click", function() { router.push({ path: '/dashboard' }); }, false);
    
  }
})