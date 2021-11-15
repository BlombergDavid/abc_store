import React, {useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import data from "../data/data";
import Routes from "./Routes";



const App = () => {
  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);
  const [asUser, setAsUser] = useState(false);
  const [storageItems, setStorageItems] = useState(productItems);


  const AddProduct = (product) => {
    const ExistingProduct = cartItems.find((item) => item.id === product.id);
    if(ExistingProduct) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...ExistingProduct, quantity: ExistingProduct.quantity+1} : item)
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  }

  const LoggedIn = () => {
    setAsUser((asUser) => asUser = true);
    console.log({asUser});
  }

  const NotLoggedIn = () => {
    setAsUser((asUser) => asUser = false);
  }

  const EmptyCart = () => {
    setCartItems((cartItems) => cartItems = []);
  }

  const SetPrice = (id, newPrice) => {
    setStorageItems((storageItems) => storageItems[id-1].price = newPrice);
  }

  const SetQuantity = (id, newQuantity) => {
    setStorageItems((storageItems) => storageItems[id-1].quantity = newQuantity);
  }


  const RemoveProduct = (product) => {
    const ExistingProduct = cartItems.find((item) => item.id === product.id);
    if(ExistingProduct.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
    setCartItems(cartItems.map((item) => item.id === product.id ? {...ExistingProduct, quantity: Math.max(0, ExistingProduct.quantity - 1)} : item));
    }
}


  return (
    <div>
      <Router>
        <Routes cartItems={cartItems} storageItems={storageItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct} asUser={asUser} LoggedIn={LoggedIn} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart} SetPrice={SetPrice} SetQuantity={SetQuantity}/>
      </Router>
    </div>
  );
};
export default App;


/*   return (
    <div>
      <Header />
      <Router>
        <div className='login'>
          <Switch>
            <Route exact path='/'>
              <LoginForm />
            </Route>
            <Route exact path='/shopping'>
              <ShoppingPage />
            </Route>
            <Route path='/shopping/checkout'>
              <CheckOut />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
 */