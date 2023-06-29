import { formatDDMMYYYY } from "../../utils/date"

const Purchase = ({ purchase }) => {

    const totalPrice = (purchase.product.price * purchase.quantity).toFixed(2)
    
    return (
        <article className="grid grid-cols-2 gap-2 text-sm mx-4">
            {/* seccion izquierda */}
            <section className="flex items-center gap-2 p-1">
                <div className="h-[100px] aspect-square">
                    <img className="h-full w-full object-contain" src={ purchase.product.images[0].url} alt="" />
                </div>
                <span className="sm:ml-4">{ purchase.product.title}</span>
            </section>

            {/* Seccion derecha */}
            <section className="grid text-center justify-center sm:items-center gap-2 sm:grid-cols-3">
                <span className="text-secondary font-medium">{ formatDDMMYYYY(purchase.createdAt)}</span>
                <span className="ml-[30%] grid items-center p-1 px-4 border-[1px] max-w-[50px] border-gray-400">{ purchase.quantity}</span>
                <span>$ { totalPrice}</span>
            </section>
        </article>
    )
}
export default Purchase