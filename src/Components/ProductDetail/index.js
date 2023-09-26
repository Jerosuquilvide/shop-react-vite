import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
const ProductDetail = () => {
    const { isProdDetailOpen, setVisibilityProductDetail, productToShow } = useContext(ShoppingCartContext);
    return (_jsxs("aside", { className: ` ${isProdDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white  z-20 w-[360px] h-[calc(100vh-80px)]`, children: [_jsxs("div", { className: "flex justify-between items-center p-6", children: [_jsx("h2", { className: "font-medium text-xl", children: "Detail" }), _jsx("div", { children: _jsx(XMarkIcon, { className: "h-6 w-6 text-black hover:cursor-pointer", onClick: () => setVisibilityProductDetail() }) })] }), _jsx("figure", { children: _jsx("img", { className: "w-full h-full rounded-lg", src: productToShow.images, alt: productToShow.title }) }), _jsxs("p", { className: "flex flex-col p-6", children: [_jsx("span", { className: "font-medium text-md", children: _jsx("strong", { children: productToShow.title }) }), _jsx("span", { className: "font-ligth text-sm", children: productToShow.description }), _jsxs("span", { className: "font-medium text-xl", children: ["$", productToShow.price] })] })] }));
};
export default ProductDetail;
