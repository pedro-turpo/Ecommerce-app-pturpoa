import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { changeIsShowCart } from "../../store/slices/cart.slice"

const Header = () => {

    const dispatch = useDispatch()

    const handleClickShowCart = () => dispatch(changeIsShowCart())
        
    return (
        <header className="grid grid-cols-2 justify-between text-2xl sm:border-b sm:border-secondary w-[100%] h-[70px] fixed pt-2 bg-white z-10 px-4 max-w-[1280px] mx-auto">
            <Link className="text-primary font-bold grid items-center" to="/">E-commerce</Link>

            <nav className="text-secondary grid grid-cols-3 mx-2 p-2">
                <Link className="grid justify-center items-center" to="/login"><i className='bx bx-user'></i></Link>
                <Link className="grid justify-center items-center" to="/purchases"><i className='bx bx-box'></i></Link>

                <button className="grid justify-center items-center" onClick={handleClickShowCart}><i className='bx bx-cart'></i></button>
            </nav>

        </header>
    )
}
export default Header