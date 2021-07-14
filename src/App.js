import { Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ProductPage from './components/page/ProductPage';
import HomePage from './components/page/HomePage';
import CategoryPage from './components/page/CategoryPage';
import SubmitForm from './components/authentication/Signin';
import ProductPageDetails from './components/page/ProductPageDetails';
import CategoryDetailPage from './components/page/CategoryDetailPage';
import CartPage from './components/page/CartPage';
import Signin from './components/authentication/Signin';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><ProductPage /></Route>
        <Route path="/about"><ProductPage /></Route>
        <Route path="/signin"><Signin /></Route>
        <Route path="/category"><CategoryPage /></Route>
        <Route path="/cart"><CartPage /></Route>
        <Route exact path="/product"><ProductPage /></Route>
        <Route path="/product/:productId"><ProductPageDetails /></Route>
        <Route exact path="/category/:categoryId"><CategoryDetailPage /></Route>
        <Route path="/:id">
          <h1>404 PAGE NOT FOUND</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
