import React, { useEffect, useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [listProduct, setListProduct] = useState([]);
    const [productProducer, setProductProducer] = useState([]);
    const [extraProducer, setExtraProducer] = useState([]);
    const [search, setSearch] = useState([]);
    const [news, setNews] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    //Local Storage
    const [cart, setCart] = useState();

    useEffect(() => {
        fetch("https://60cc065271b73400171f6e19.mockapi.io/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setListProduct(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
        fetch("https://60d56ce2943aa60017768911.mockapi.io/producers")
            .then(res => res.json())
            .then(
                (result) => {
                    setProductProducer(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
        fetch("https://60d1f5d75b017400178f4cb3.mockapi.io/listextra")
            .then(res => res.json())
            .then(
                (result) => {
                    setExtraProducer(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
        fetch("https://60d56ce2943aa60017768911.mockapi.io/news")
            .then(res => res.json())
            .then((result) => {
                setNews(result);
            },
                (error) => {

                }
            )
    }, []);

    function apiSearch(e) {
        fetch(`https://60cc065271b73400171f6e19.mockapi.io/products/${e}`)
            .then(res => res.json())
            .then((result) => {
                setSearch(result);
            },
                (error) => { }
            )
    }

    function sortGiaTangTK() {
        var sorted = [...search].sort(function (a, b) {
            return a.pricenew - b.pricenew;
        });
        setSearch(sorted);
    }

    function sortGiaGiamTK() {
        var sorted = [...search].sort(function (a, b) {
            return b.pricenew - a.pricenew;
        });
        setSearch(sorted);
    }

    function sortGiaTang() {
        var sorted = [...productProducer].sort(function (a, b) {
            return a.pricenew - b.pricenew;
        });
        setSearch(sorted);
    }

    function sortGiaGiam() {
        var sorted = [...productProducer].sort(function (a, b) {
            return b.pricenew - a.pricenew;
        });
        setSearch(sorted);
    }

    function resetCart() {
        setCart([]);
    }

    function addCart(el) {
        var exist = cart.find((x) => x.id === el.id);
        if (exist) {
            setCart(cart.map(
                e => e.id === el.id ? { ...exist, quality: exist.quality + 1 } : e
            ));
        }
        else {
            setCart([...cart, { ...el, quality: 1 }]);
        }
    }

    function addQuality(params) {
        var exist = cart.find((x) => x.id === params.id);
        if (exist) {
            setCart(cart.map(
                e => e.id === params.id ? { ...exist, quality: exist.quality + 1, giaQuality: e.pricenew + e.giaQuality } : e
            ));
        }
    }

    function minusQuality(params) {
        var exist = cart.find((x) => x.id === params.id);
        if (exist) {
            setCart(cart.map(
                e => e.id === params.id ? { ...exist, quality: exist.quality <= 1 ? 1 : exist.quality - 1, giaQuality: e.pricenew + e.giaQuality } : e
            ));
        }
    }

    function deleteCart(params) {
        const result = cart.filter(word => word.id !== params.id);
        setCart(result);
    }

    const valueCartProvider = {
        listProduct, setListProduct,
        productProducer, setProductProducer,
        extraProducer, setExtraProducer,
        search, setSearch, apiSearch,
        sortGiaTangTK, sortGiaGiamTK, sortGiaTang, sortGiaGiam,
        cart, addCart, deleteCart, resetCart, addQuality, minusQuality, totalPrice,
        news, setNews
    }

    return (
        <CartContext.Provider value={valueCartProvider}>
            {children}
        </CartContext.Provider>
    );
}