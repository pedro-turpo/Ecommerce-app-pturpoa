import { useDispatch } from "react-redux"
import { deleteProductCart } from "../../store/slices/cart.slice"

const CartProduct = ({ cartProduct }) => {

    const dispatch = useDispatch()

    const totalPrice = (cartProduct.quantity * cartProduct.product.price).toFixed(2)

    const handleClickDelete = () => {
        dispatch(deleteProductCart(cartProduct.id))
    }

    return (
        <article className="grid grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto] gap-y-2">
            <div className="h-[80px] aspect-square p-2">
                <img className="w-full h-full object-contain" src={ cartProduct.product.images[0].url } alt="" />
            </div>

            <div>
                <span className="text-sm mb-2 line-clamp-2">{ cartProduct.product.title}</span>
                <article className="mt-2">
                    <div className="flex border-[1px] max-w-max">
                        <button className="p-1 px-3 border-[1px]" >-</button>
                        <div className="p-1 px-3 border-[1px]">{ cartProduct.quantity}</div>
                        <button className="p-1 px-3 border-[1px]">+</button>
                    </div>
                </article>
            </div>

            <i onClick={handleClickDelete} className='bx bxs-trash text-end cursor-pointer justify-self-end self-start mr-4 text-primary'></i>

            <span className="col-span-2 text-end text-sm text-secondary">Total:</span>
            <span className="px-2 text-sm font-medium">$ { totalPrice }</span>

        </article>
    )
}
export default CartProduct