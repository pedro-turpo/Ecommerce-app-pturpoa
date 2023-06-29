import { Link } from "react-router-dom"
import { addProductCart } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const Product = ({ product }) => {


    const dispatch = useDispatch()

    const handleClickAddProduct = (e) => {
        e.preventDefault()
        const productToAdd = {
            quantity: 1,
            productId: product.id
        }
        dispatch(addProductCart(productToAdd))
    }

    return (
        <Link className="border-[2px] rounded-md w-[250px] h-[380px] p-2 relative" to={`/products/${product.id}`}>
            {/* Images of producst */}
            <div className="h-[200px] overflow-hidden p-4 relative group border-b border-secondary">
                <img className="w-full h-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500" src={product.images[0].url} alt="Product" />

                <div className="absolute top-0 left-0 w-full h-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img className="object-contain w-full h-full" src={product.images[1].url} alt="product" />
                </div>
            </div>

            {/* Information of product */}
            <section className="pt-2">
                <h5 className="text-secondary font-bold">{ product.brand}</h5>
                <h4 className="line-clamp-2 pl-2 font-bold">{ product.title}</h4>
                <p className="pt-2 text-secondary">Price</p>
                <p className="pl-2 font-bold">${ product.price }</p>
            </section>

            <button className="absolute bottom-4 right-6 h-[40px] aspect-square p-2 flex justify-center items-center rounded-full bg-primary text-white" onClick={handleClickAddProduct}><i className='bx bx-cart'></i></button>
        </Link>
    )
}
export default Product