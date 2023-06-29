import Product from "./Product"

const ListProducts = ({ products}) => {
    return (
        <section className="mt-4 flex flex-wrap gap-4 justify-center">
            {
                products.map((product) => <Product key={product.id} product={product} />)
            }
        </section>
    )
}
export default ListProducts