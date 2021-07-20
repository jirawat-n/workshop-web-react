import { Route, Switch } from 'react-router-dom';
import './components/assets/navbar.css'
import Navbar from './components/layout/Navbar';
import ProductPage from './components/page/ProductPage';
import CategoryPage from './components/page/CategoryPage';
import ProductPageDetails from './components/page/ProductPageDetails';
import CategoryDetailPage from './components/page/CategoryDetailPage';
import CartPage from './components/page/CartPage';
import SignIn2 from './components/authentication/Signin2';
import Signin from './components/authentication/Signin2';
import Login from './components/page/Login';
import About from './components/page/About';
import Footer from './components/layout/Footer';
import HomePage from './components/page/HomePage';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

function App() {
   return (
      <div className="App">
         <Navbar />
         <div className="header-nav"></div>
         <TransitionGroup>
            <CSSTransition timeout={450} classNames="fade">
               <Switch >
                  <Route exact path="/"><HomePage /></Route>
                  <Route path="/about"><About /></Route>
                  <Route path="/signin"><Signin /></Route>
                  <Route exact path="/category"><CategoryPage /></Route>
                  <Route path="/cart"><CartPage /></Route>
                  <Route path="/token"><SignIn2 /></Route>
                  <Route exact path="/product"><ProductPage /></Route>
                  <Route path="/product/:productId"><ProductPageDetails /></Route>
                  <Route path="/login"><Login /></Route>
                  <Route path="/category/:categoryId"><CategoryDetailPage /></Route>
                  <Route path="/:id">
                     <h1>404 PAGE NOT FOUND</h1>
                  </Route>
               </Switch>
            </CSSTransition>
         </TransitionGroup>
         <Footer />
      </div>
   );
}

export default App;
