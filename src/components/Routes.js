import React from 'react'
import LoginForm from './LoginForm'
import ShoppingPage from './ShoppingPage'
import CheckOut from './CheckOut'
import { Route, Switch } from 'react-router-dom'
import Header from './Header';
import LoginHeader from './LoginHeader'
import CurrentCart from './CurrentCart'
import ConfirmationPage from './ConfirmationPage'
import ManageItems from './StoreManager/ManageItems'

import NikeJacket from './itemDetail/NikeJacket'
import AdidasJacket from './itemDetail/AdidasJacket'
import ElleseJumper from './itemDetail/AdidasJacket'
import NikePants from './itemDetail/NikePants'
import AdidasPants from './itemDetail/AdidasPants'
import EllessePants from './itemDetail/EllessePants'
import NikeShoes from './itemDetail/NikeShoes'
import AdidasShoes from './itemDetail/AdidasShoes'
import EllesseShoes from './itemDetail/EllesseShoes'


const Routes = ({ cartItems, storageItems, AddProduct, RemoveProduct, asUser, LoggedIn, NotLoggedIn, EmptyCart, SetPrice, SetQuantity }) => {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <LoginHeader />
                    <LoginForm asUser={asUser} LoggedIn={LoggedIn} NotLoggedIn={NotLoggedIn} storageItems={storageItems}/>
                </Route>
                <Route exact path='/shopping'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <ShoppingPage storageItems={storageItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct}/>
                    <CurrentCart cartItems={cartItems}/>
                </Route>
                <Route exact path='/shopping/checkout'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <CheckOut cartItems={cartItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct}/>
                </Route>
                <Route exact path='/shopping/1'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <NikeJacket cartItems={cartItems} storageItems={storageItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct}/>
                    <CurrentCart cartItems={cartItems}/>
                </Route>
                <Route exact path='/shopping/2'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <AdidasJacket cartItems={cartItems} storageItems={storageItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct}/>
                    <CurrentCart cartItems={cartItems}/>
                </Route>
                <Route exact path='/shopping/3'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <ElleseJumper cartItems={cartItems} storageItems={storageItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct}/>
                    <CurrentCart cartItems={cartItems}/>
                </Route>
                <Route exact path='/shopping/4'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <NikePants cartItems={cartItems} storageItems={storageItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct}/>
                    <CurrentCart cartItems={cartItems}/>
                </Route>
                <Route exact path='/shopping/5'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <AdidasPants cartItems={cartItems} storageItems={storageItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct}/>
                    <CurrentCart cartItems={cartItems}/>
                </Route>
                <Route exact path='/shopping/6'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <EllessePants cartItems={cartItems} storageItems={storageItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct}/>
                    <CurrentCart cartItems={cartItems}/>
                </Route>
                <Route exact path='/shopping/7'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <NikeShoes cartItems={cartItems} storageItems={storageItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct}/>
                    <CurrentCart cartItems={cartItems}/>
                </Route>
                <Route exact path='/shopping/8'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <AdidasShoes cartItems={cartItems} storageItems={storageItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct}/>
                    <CurrentCart cartItems={cartItems}/>
                </Route>
                <Route exact path='/shopping/9'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <EllesseShoes cartItems={cartItems} storageItems={storageItems} AddProduct={AddProduct} RemoveProduct={RemoveProduct}/>
                    <CurrentCart cartItems={cartItems}/>
                </Route>
                <Route exact path='/shopping/confirmation'>
                    <Header asUser={asUser} NotLoggedIn={NotLoggedIn} EmptyCart={EmptyCart}/>
                    <ConfirmationPage cartItems={cartItems} EmptyCart={EmptyCart}/>
                </Route>
                <Route exact path='/admin'>
                    <LoginHeader />
                    <ManageItems storageItems={storageItems} SetPrice={SetPrice} SetQuantity={SetQuantity} />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
