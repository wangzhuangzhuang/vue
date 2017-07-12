import App from './App';
import details from './components/details/details.vue';
import login from './components/login/login.vue';
import my from './components/my/my.vue';
import show from './components/show/show.vue';
import set from './components/set/set.vue';

const routers = [
  {
    path: '/',
    name: 'index',
    component: App,
    children:[
       { 
	　　　　  path: '', 
	         name:"details",
	         redirect:"/details",
	 　　　   component: details 
　　     },
        {
        	path: '/login',
        	name:"login", 
            component: login
        },
        {
        	path: '/show',
        	name:"show", 
            component: login
        },
        {
        	path: '/my',
        	name:"my", 
            component: my
        },
        {
        	path: '/my',
        	name:"my", 
            component: my
        },
       { 
	　　　　  path: 'details/:id', 
	         name:"details",
	 　　　   component: details 
　　     }
    ]
  }
]


export default routers