import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Header from './pages/Shared/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import ShowDetail from './pages/ShowDetail/ShowDetail';
import Gallery from './pages/Gallery/Gallery';
import Blog from './pages/Blog/Blog';
import NotFound from './pages/NotFound/NotFound';




function App() {
  return (
    <div className="App">
     <AuthProvider>
       <BrowserRouter>
       <Header></Header>
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route path="/login">
             <Login></Login>
           </Route>
           <PrivateRoute path="/details/:serviceId">
              <ShowDetail></ShowDetail>
           </PrivateRoute>
           <PrivateRoute path="/gallery">
              <Gallery></Gallery>
           </PrivateRoute>
           <PrivateRoute path="/blog">
             <Blog></Blog>
           </PrivateRoute>
           <Route path="*">
             <NotFound></NotFound>
           </Route>
         </Switch>
          <Footer></Footer>
       </BrowserRouter>
     </AuthProvider>
     
    </div>
  );
}

export default App;
