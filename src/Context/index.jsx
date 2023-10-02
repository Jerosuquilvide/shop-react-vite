import { createContext, useState, useEffect } from "react";

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

    //Get products
    const [item, setItem] = useState(null);
    const [filteredItemByTitle, setFilteredItemByTitle] = useState(null);
    
    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItem(data))
      },[])
    
    const filteredItemsByTitle = (item, searchByTitle) => {
        return item?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    const filteredItemsByCategory = (item, searchByCategory) => {
        return item?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return items
        }
      }
    
      useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItemByTitle(filterBy('BY_TITLE_AND_CATEGORY', item, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItemByTitle(filterBy('BY_TITLE', item, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItemByTitle(filterBy('BY_CATEGORY', item, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItemByTitle(filterBy(null, item, searchByTitle, searchByCategory))
        return () => {
            setSearchByTitle(null)
          }
      }, [item, searchByTitle, searchByCategory])



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
            setOrder,
            item,
            setItem,
            searchByTitle,
            setSearchByTitle,
            filteredItemByTitle,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}

export default ShoppingCartProvider