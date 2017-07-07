import App from './App';
import details from './components/details/details.vue';
import login from './components/login/login.vue';


const routers = [
  {
    path: '/',
    name: 'index',
    component: App,
    children:[
        { 
　　　　path: '/', 
        name:"details",
 　　　 component: details 
　　    },
        {
        	path: '/login',
        	name:"login", 
            component: login
        }
    ]
  }
]
export default routers