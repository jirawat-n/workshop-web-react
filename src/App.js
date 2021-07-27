import { Route, Switch } from 'react-router-dom';
import './components/assets/navbar.css'
import './components/assets/home.css'
import Navbar from './components/layout/Navbar';
import ProductPage from './components/page/ProductPage';
import CategoryPage from './components/page/CategoryPage';
import ProductPageDetails from './components/page/ProductPageDetails';
import CategoryDetailPage from './components/page/CategoryDetailPage';
import CartPage from './components/page/CartPage';
import SignIn2 from './components/authentication/Signin2';
import Signin from './components/authentication/Signin2';
import Login from './components/page/Login';
import InvoicePage from './components/page/InvoidePage';
import InvoicePageDetail from './components/page/InvoidePageDetail';
import Footer from './components/layout/Footer';
import HomePage from './components/page/HomePage';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import ScrollToTop from './components/layout/ScrollToTop';
function App() {
   return (
      <div className="all-font">
         <Navbar />
         <Route render={({ location }) => (
            <TransitionGroup>
               <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="fade"
               >
                  <ScrollToTop>
                     <Switch location={location}>
                        <Route exact path="/"><HomePage /></Route>
                        <Route path="/signin"><Signin /></Route>
                        <Route exact path="/category"><CategoryPage /></Route>
                        <Route path="/cart"><CartPage /></Route>
                        <Route path="/token"><SignIn2 /></Route>

                        <Route exact path="/products"><ProductPage /></Route>
                        <Route exact path="/products/:category_in"><ProductPage /></Route>
                        <Route exact path="/product/:page"><ProductPage /></Route>

                        <Route path="/product/detail/:productId/"><ProductPageDetails /></Route>
                        <Route path="/login"><Login /></Route>


                        <Route exact path="/invoice"><InvoicePage /></Route>

                        <Route path="/invoice/:id/"><InvoicePage /></Route>

                        <Route exact path="/invoicedetail/:InvoiceDetail/"><InvoicePageDetail /></Route>

                        <Route path="/product/:categoryId"><CategoryDetailPage /></Route>
                        <Route path="/:id">
                           <h1>404 PAGE NOT FOUND</h1>
                        </Route>
                     </Switch>
                  </ScrollToTop>
               </CSSTransition>
            </TransitionGroup>
         )} />
         <Footer />
      </div>
   );
}

export default App;
