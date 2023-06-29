import { useEffect, useState } from "react"
import { axiosEcommerce, getConfig } from "../utils/configAxios"
import Purchase from "../components/purchases/Purchase"
import { Link } from "react-router-dom"

const Purchases = () => {

  const [purchasesHystory, setPurchasesHystory] = useState([])

  useEffect(() => {
    axiosEcommerce
      .get("/purchases", getConfig())
      .then(({ data }) => {
        const orderPurchases = data.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        setPurchasesHystory(orderPurchases)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="max-w-[850px] mx-auto mt-[90px] w-">

      <div className="flex items-center gap-4 ml-4">
        <Link className="text-black/70 cursor-pointer" to="/">Home</Link>
        <div className="h-[5px] aspect-square rounded-full bg-primary "></div>
        <Link className="font-medium cursor-pointer" to="/purchases">purchases</Link>
      </div>

      <h3 className="mt-6 mb-10 text-xl font-bold text-black/80 ml-4">My purchases</h3>
      
      <section className="grid gap-8 px-2">
        {
          purchasesHystory.map((purchase) => <Purchase key={purchase.id} purchase={ purchase } /> )
        }
      </section>

    </section>
  )
}
export default Purchases