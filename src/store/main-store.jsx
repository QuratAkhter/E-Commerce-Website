import { createContext, useReducer, useState } from "react";

export const ProductList = createContext({
    productList: [],
    product: "",
    setCurProduct: () => {},
    getProductList: () => {},
    searchProduct: () => {}
});

const productListReducer = (curState, action) => {
    switch (action.type) {
        case 'BRING_NEW_PRODUCTS':
            return action.payload.products;
        default:
            return curState;
    }
};

const productReducer = (curState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return action.payload.product;
        default:
            return curState;
    }
};

const ProductListProvider = ({ children }) => {
    const [productList, dispatchProductList] = useReducer(productListReducer, []);
    const [product, dispatchProduct] = useReducer(productReducer, "");
    const [fetching, setFetching] = useState(false);

    const setCurProduct = (product) => {
        dispatchProduct({
            type: 'SET_PRODUCT',
            payload: { product }
        });
    };

    const searchProduct = (name) => {
        const url = `https://dummyjson.com/products/search?q=${name}`;
        setFetching(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatchProductList({
                    type: "BRING_NEW_PRODUCTS",
                    payload: { products: data.products }
                });
                setFetching(false);
            });
    };

    const getProductList = (categ) => {
        const url = `https://dummyjson.com/products/category/${categ}?limit=0`;
        setFetching(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatchProductList({
                    type: "BRING_NEW_PRODUCTS",
                    payload: { products: data.products }
                });
                setFetching(false);
            });
    };

    return (
        <ProductList.Provider value={{ productList, getProductList, product, setCurProduct, searchProduct, fetching }}>
            {children}
        </ProductList.Provider>
    );
};

export default ProductListProvider;
