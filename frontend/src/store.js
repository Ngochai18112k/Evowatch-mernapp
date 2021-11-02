import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from "./reducers/userReducers";
import {
    productListReducer,
    productDetailsReducer,
    productCatsReducer,
    productNewReducer,
    productCreateReducer,
    productDeleteReducer,
    productUpdateReducer,
    productBrandsReducer,
    productBrandsMenReducer,
    productBrandsWomenReducer,
    productBrandsExtraReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
    orderListReducer,
    orderListMyReducer,
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderDeliverReducer,
} from "./reducers/orderReducers";
import {
    newsListReducer,
    newsDetailsReducer,
    newsCreateReducer,
    newsDeleteReducer,
    newsUpdateReducer,
    newsReviewCreateReducer,
} from "./reducers/newsReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productCats: productCatsReducer,
    productBrands: productBrandsReducer,
    productBrandsMen: productBrandsMenReducer,
    productBrandsWomen: productBrandsWomenReducer,
    productBrandsExtra: productBrandsExtraReducer,
    productNew: productNewReducer,
    productCreate: productCreateReducer,
    productDelete: productDeleteReducer,
    productUpdate: productUpdateReducer,
    cart: cartReducer,
    orderList: orderListReducer,
    orderListMy: orderListMyReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    newsList: newsListReducer,
    newsDetails: newsDetailsReducer,
    newsCreate: newsCreateReducer,
    newsDelete: newsDeleteReducer,
    newsUpdate: newsUpdateReducer,
    newsReviewCreate: newsReviewCreateReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {};

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: {
        userInfo: userInfoFromStorage,
    },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
