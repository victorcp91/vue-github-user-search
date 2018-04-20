import start from '../components/main/Start'
import details from '../components/details/Details'

export const routes = [
	{path: '', component: start, name:'home'},
	{name:'details', path:'/details/:userName', component: details, props: true}
];