import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    //state that save the state of the modal (hidden or visible)
    const [isProdDetailOpen, setIsProdDetailOpen] = useState(false);

    //state that save the state of the checkout (hidden or visible)
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
    //state that saves the product to show
    const [productToShow, setProductToShow] = useState({});
    //state that saves the shopping cart
    const [cartProducts, setCartProducts] = useState([]);

    //state that saves the shopping cart
    const [order, setOrder] = useState([]);

    const setVisibilityProductDetail = () => setIsProdDetailOpen(!isProdDetailOpen)

    const setVisibilityCheckOut = () => setIsCheckOutOpen(!isCheckOutOpen);
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            setVisibilityProductDetail,
            isProdDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutOpen,
            setIsCheckOutOpen,
            setVisibilityCheckOut,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}

export default ShoppingCartProvider