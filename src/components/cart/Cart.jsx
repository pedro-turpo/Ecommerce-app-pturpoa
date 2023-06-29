import { useDispatch, useSelector } from "react-redux"
import { changeIsShowCart, checkOutCart, getCartProducts } from "../../store/slices/cart.slice"
import { useEffect } from "react"
import CartProduct from "./CartProduct"

const Cart = () => {

    const { isShowCart, products } = useSelector((store) => store.cart)

    const { token } = useSelector(store => store.userInfo)

    const dispatch = useDispatch()

    const handleClickChangeShowCart = () => {
        dispatch(changeIsShowCart())
    }

    const handleClickCheckOut = () => {
        dispatch(checkOutCart())
    }

    const totalPriceCheckout = products.reduce((acc, product) => acc + (product.quantity * product.product.price) ,0)

    useEffect(() => {
        if (token && isShowCart) {
            dispatch(getCartProducts())    
        }
    }, [isShowCart])
    
    return (
        <section className={`fixed top-0 bg-white h-screen ${isShowCart && token  ? "right-0" : "-right-full"} w-[300px] sm:w-[350px] transition-all duration-300 p-2 shadow-2xl shadow-black/30 grid grid-rows-[auto_1fr_auto] mt-[70px]`}>

            <button onClick={handleClickChangeShowCart} className="absolute top-3 right-3 text-xl text-red-500"><i className='bx bxs-x-square'></i></button>
            <h3 className="font-bold text-xl">Shopping Cart</h3>

            {/* Productos del carrito */}
            <section className="grid gap-4 content-start py-4 overflow-y-auto">
                {
                    products.map((cartProduct) => <CartProduct key={cartProduct.id} cartProduct={ cartProduct } />)
                }
            </section>

            {/* Seccion precio total */}
            <section className="border-t-[1px] border-gray-400 p-4 grid grid-cols-2 gap-4 mb-[80px] sm:mb-[70px]">
                <span className="text-secondary">Total</span>
                <span className="text-end font-semibold">$ { totalPriceCheckout.toFixed(2) }</span>
                <button onClick={handleClickCheckOut} className="col-span-2 block w-full py-2 bg-[#F85555] text-white hover:bg-red-600 transition-color">Checkout</button>
            </section>
        </section>
    )
}
export default Cart