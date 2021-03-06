
import React from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';

import Detail from './views/Detail';
import Hou from './hou/Hou';
import Cart from './views/Cart';

import AsyncComponent from './AsyncComponent';


const Register = AsyncComponent(()=>require('./views/Register'))
const Login = AsyncComponent(()=>require('./views/Login'))
const Index = AsyncComponent(()=>require('./views/Index'))
//const Detail = AsyncComponent(()=>require('./views/Detail'))


function App() {
  return (
    <div className="App">
      
      <Router>
      	<div>

			     		<Route path="/register" component={Register}/>
			     		<Route path="/login" component={Login}/>
			     		<Route path="/index" component={Index}/>
			     		<Route path="/detail/:id" component={Detail}/>
			     		<Route path="/cart" component={Cart}/>
			     		<Route path="/hou" component={Hou}/>
			     		<Redirect to="login"/>

      		
      	</div>
      </Router>
    </div>
  );
}

export default App;
