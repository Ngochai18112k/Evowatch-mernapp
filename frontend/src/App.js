import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/styles/base.scss";
import "./assets/styles/responsive.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewsEdit from "./containers/Admin/News/NewsEdit";
import NewsList from "./containers/Admin/News/NewsList";
import OrderList from "./containers/Admin/Orders/OrderList";
import ProductEdit from "./containers/Admin/Products/ProductEdit";
import ProductList from "./containers/Admin/Products/ProductList";
import UserEdit from "./containers/Admin/Users/UserEdit";
import UserList from "./containers/Admin/Users/UserList";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Faq from "./containers/Intro/pages/Faq";
import Intro from "./containers/Intro/pages/Intro";
import Pay from "./containers/Intro/pages/Pay";
import Replace from "./containers/Intro/pages/Replace";
import Ship from "./containers/Intro/pages/Ship";
import Shop from "./containers/Intro/pages/Shop";
import DetailNews from "./containers/News/DetailNews";
import News from "./containers/News/News";
import Order from "./containers/Order/Order";
import Payment from "./containers/Order/Payment";
import PlaceOrder from "./containers/Order/PlaceOrder";
import Shipping from "./containers/Order/Shipping";
import DetailProduct from "./containers/Product/pages/DetailProduct/DetailProduct";
import ProductPage from "./containers/Product/pages/ProductPage/ProductPage";
import Account from "./features/Auth/components/Account";
import Login from "./features/Auth/components/Login";
import SignUp from "./features/Auth/components/Signup";
import Cart from "./features/Cart/Cart";
import ModalProvider from "./features/Contexts/ModalProvider";
import SearchPage from "./features/Search/SearchPage";

function App() {
    return (
        <div className="App">
            <Router>
                <ModalProvider>
                    {/* Header */}
                    <Header></Header>
                    {/* Container */}
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/profile" component={Account} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/intro" component={Intro} />
                        <Route path="/intro-faq" component={Faq} />
                        <Route path="/intro-pay" component={Pay} />
                        <Route path="/intro-replace" component={Replace} />
                        <Route path="/intro-ship" component={Ship} />
                        <Route path="/intro-shop" component={Shop} />
                        <Route path="/product/:id" component={DetailProduct} />
                        <Route
                            path="/products/name/:name?"
                            component={ProductPage}
                            exact
                        />
                        <Route
                            path="/products/category/:category"
                            component={ProductPage}
                            exact
                        />
                        <Route
                            path="/products/category/:category/name/:name/brand/:brand/min/:min/max/:max/page/:pageNumber"
                            component={ProductPage}
                            exact
                        />
                        <Route path="/products" component={ProductPage} />
                        <Route
                            path="/search/name/:name"
                            component={SearchPage}
                            exact
                        />
                        <Route
                            path="/news/page/:pageNumber"
                            component={News}
                            exact
                        />
                        <Route path="/news/:id" component={DetailNews} />
                        <Route path="/news" component={News} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/order/:id" component={Order} />
                        <Route path="/shipping" component={Shipping} />
                        <Route path="/payment" component={Payment} />
                        <Route path="/placeorder" component={PlaceOrder} />
                        <Route
                            path="/admin/userlist"
                            component={UserList}
                            exact
                        />
                        <Route
                            path="/admin/user/:id/edit"
                            component={UserEdit}
                        />
                        <Route
                            path="/admin/productlist"
                            component={ProductList}
                            exact
                        />
                        <Route
                            path="/admin/productlist/:pageNumber"
                            component={ProductList}
                            exact
                        />
                        <Route
                            path="/admin/product/:id/edit"
                            component={ProductEdit}
                        />
                        <Route path="/admin/orderlist" component={OrderList} />
                        <Route
                            path="/admin/newslist"
                            component={NewsList}
                            exact
                        />
                        <Route
                            path="/admin/newslist/:pageNumber"
                            component={NewsList}
                            exact
                        />
                        <Route
                            path="/admin/news/:id/edit"
                            component={NewsEdit}
                        />
                        <Route path="/" component={Home} exact />
                    </Switch>
                    {/* Footer */}
                    <Footer></Footer>
                </ModalProvider>
            </Router>
        </div>
    );
}

export default App;
