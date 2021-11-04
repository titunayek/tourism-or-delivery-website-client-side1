import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Footer from "./components/Header/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import AuthProvider from "./counts/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute"



function App() {
  return(
    <div className="App">
     <AuthProvider>
     <Router>
     <Header></Header>
     <Switch>
       <Route exact path='/'>
         <Home></Home>
       </Route>
       <Route  path='/home'>
         <Home></Home>
       </Route>
       <Route  path='/login'>
         <Login></Login>
       </Route>
       <PrivateRoute path='/orders/:serviceId'>
         <Orders></Orders>
       </PrivateRoute>
       <Route  path="*">
         <NotFound></NotFound>
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
     </AuthProvider>
    </div>
  )
  
}

export default App;
