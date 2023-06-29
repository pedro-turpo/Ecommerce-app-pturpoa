import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { axiosEcommerce } from "../utils/configAxios"
import ListProducts from "../components/home/ListProducts"
import { useDispatch } from "react-redux"
import { addProductCart } from "../store/slices/cart.slice"

const sliderStyles = {
  1: "-ml-[0%]",
  2: "-ml-[100%]",
  3: "-ml-[200%]",
}

const ProductDetail = () => {

  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [similarProducts, setSimilarProducts] = useState([])
  const [imageToShow, setImageToShow] = useState(1)


  const { id } = useParams()
  const dispatch = useDispatch()

  const handleClickPlus = () => setQuantity(quantity + 1)

  const handleClickless = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleClickPreviusImage = () => {
    if (imageToShow > 1) {
      setImageToShow(imageToShow - 1)
    }
  }

  const handleClickNextImage = () => {
    if (imageToShow < 3) {
      setImageToShow(imageToShow + 1)
    }
  }

  const handleClickAddProduct = () => {
    const productToAdd = {
      quantity,
      productId: product.id, 
    }
    dispatch(addProductCart(productToAdd))
  }

  useEffect(() => {
    axiosEcommerce
      .get(`/products/${id}/`)
      .then(({ data }) => setProduct(data))
      .catch((error) => console.log(error))
  }, [id])

  useEffect(() => {

    if (product) {
      axiosEcommerce
        .get(`/products?categoryId=${product.categoryId}`)
        .then(({ data }) => {
          const producsFiltered = data.filter((item) => item.id !== product.id)
          setSimilarProducts(producsFiltered)
        })
        .catch((error) => console.log(error))
    }
  }, [product])

  return (
    <section className="p-2 max-w-[1024px] mx-auto">

      <section className="flex text-xs gap-2 items-center">
        <Link to='/'>Home</Link>
        <div className="h-[6px] aspect-square rounded-full bg-red-500"></div>
        <span className="font-bold truncate w-[200px]">{product?.title}</span>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 items-center">
        {/* slider */}
        <article className="overflow-hidden relative">
          <section className={`flex w-[300%] ${sliderStyles[imageToShow]} transition-all duration-300`}>
            <div className="h-[300px] w-[calc(100%_/_3)]">
              <img className="w-full h-full object-contain" src={product?.images[0].url} alt="" />
            </div>

            <div className="h-[300px] w-[calc(100%_/_3)]">
              <img className="w-full h-full object-contain" src={product?.images[1].url} alt="" />
            </div>

            <div className="h-[300px] w-[calc(100%_/_3)]">
              <img className="w-full h-full object-contain" src={product?.images[2].url} alt="" />
            </div>
          </section>

          <button onClick={handleClickPreviusImage} className="absolute top-1/2 left-2 text-2xl bg-red-500 h-[35px] aspect-square rounded-full text-white -translate-y-1/2"><i className='bx bx-chevron-left'></i></button>

          <button onClick={handleClickNextImage} className="absolute top-1/2 text-2xl right-2 bg-red-500 h-[35px] aspect-square rounded-full text-white -translate-y-1/2"><i className='bx bx-chevron-right'></i></button>
        </article>

        {/* info */}
        <article className="grid gap-6">
          <div>
            <h4 className="text-gray-300 font-semibold">{product?.brand}</h4>
            <span className="font-semibold text-lg ml-2">{product?.title}</span>
          </div>

          <section className="grid grid-cols-2">
            <article>
              <h4>Price</h4>
              <span>$ {product?.price}</span>
            </article>

            <article>
              <h5 className="text-sm text-gray-300 font-semibold">Quantity</h5>
              <div className="flex border-[1px] max-w-max">
                <button className="p-1 px-3 border-[1px]" onClick={handleClickless}>-</button>
                <div className="p-1 px-3 border-[1px]">{quantity}</div>
                <button className="p-1 px-3 border-[1px]" onClick={handleClickPlus}>+</button>
              </div>
            </article>
          </section>
          <button onClick={handleClickAddProduct} className="block w-full py-2 bg-[#F85555] text-white hover:bg-red-600 transition-color">addToCard <i className="bx bx-cart"></i></button>

          <p className="text-xs">{product?.description}</p>

        </article>

      </section>
      <section>
        <h3>Discover similar items</h3>
        <ListProducts products={similarProducts} />
      </section>
    </section>
  )
}
export default ProductDetail