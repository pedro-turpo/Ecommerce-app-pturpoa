import axios from "axios"
import { useEffect, useState } from "react"
import { axiosEcommerce } from "../utils/configAxios"
import Product from "../components/home/Product"
import ListProducts from "../components/home/ListProducts"

const Home = () => {

  const [categorys, setCategorys] = useState([])
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState([])
  const [currentCategory, setCurrentCategory] = useState("")

  const productsByName = products.filter((product) => product.title.toLowerCase().includes(productName))

  const handleSubmit = (e) => {
    e.preventDefault()
    const currentProductName = e.target.productName.value
    setProductName(currentProductName.toLowerCase())
  }

  const handleClickCategory = (e) => {
    setCurrentCategory(e.target.dataset.category)
  }

  useEffect(() => {

    axiosEcommerce
      .get("/categories")
      .then(({ data }) => setCategorys(data))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    axiosEcommerce
      .get(`/products?categoryId=${currentCategory}`)
      .then(({ data }) => setProducts(data))
      .catch((error) => console.log(error))
  }, [currentCategory])


  return (
    <section className="mt-[90px] flex">

      {/* Category and filters */}
      <article className="hidden sm:block sm:w-[20%] sm:fixed px-4">
        <div className="flex justify-between items-center p-2 text-lg font-medium border-b-[2px]  ">
          <h4>Category</h4>
          <i className="bx bx-chevron-down cursor-pointer"></i>
        </div>
        <ul className="mx-6 my-2 text-gray-500">
          <li className="cursor-pointer" onClick={handleClickCategory} data-category="" >All</li>
          {
            categorys.map((category) => (
              <li className="cursor-pointer" onClick={handleClickCategory} data-category={category.id} key={category.id}>{category.name}</li>
            ))
          }
        </ul>
      </article>

      {/* Section of search and products list */}
      <article className="sm:w-[80%] sm:ml-[20%]">
        <form className="flex justify-center w-full" onSubmit={handleSubmit}>
          <input className="border w-[80%] h-[40px] border-gray-200 px-4" id="productName" type="text" placeholder="What are you looking for?" />
          <button className="p-2 flex h-[40px] aspect-square items-center justify-center bg-primary text-white"><i className='bx bx-search'></i></button>
        </form>

        {/* List products */}
        <ListProducts products={productsByName} />
      </article>
    </section>
  )
}
export default Home