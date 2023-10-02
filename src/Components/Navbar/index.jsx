import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const  Navbar = () => {

    const stylePos = 'underline underline-offset-4';
    const context = useContext(ShoppingCartContext);
    return (
        <>
        <nav className="flex justify-between items-center fixed z-10 w-full top-0 py-5 px-8 font-light text-sm bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                     to='/'
                     >
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/' 
                        onClick={() => context.setSearchByCategory('')}
                        className={({isActive}) => 
                            isActive ? stylePos : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes' 
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({isActive}) => 
                            isActive ? stylePos : undefined
                    } 
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics' 
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({isActive}) => 
                            isActive ? stylePos : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/farnitures' 
                        onClick={() => context.setSearchByCategory('farnitures')}
                        className={({isActive}) => 
                            isActive ? stylePos : undefined
                        }>
                        Farnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys' 
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({isActive}) => 
                            isActive ? stylePos : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others' 
                        onClick={() => context.setSearchByCategory('others')}
                        className={({isActive}) => 
                            isActive ? stylePos : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="font-sans">
                    jero@jero.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders' 
                        className={({isActive}) => 
                            isActive ? stylePos : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account' 
                        className={({isActive}) => 
                            isActive ? stylePos : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sing-in' 
                        className={({isActive}) => 
                            isActive ? stylePos : undefined
                        }>
                        Sing In
                    </NavLink>
                </li>
                <li>
                    🛒 {context.cartProducts.length}
                </li>
                
            </ul>
        </nav>
        </>
    )
}


export default Navbar