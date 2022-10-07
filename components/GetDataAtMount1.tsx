import axios from "axios"
import { useEffect, useState } from "react"
import { GET_PRODUCT_LIST } from "../utils/API_URL"

export default function GetDataAtMount1() {
  const [products, setProducts] = useState<any>()

  const getProduct = async () => {
    // const response = await axios.get(API_URL)
    // setProducts(response.data)
    try {
      const { data: productsData } = await axios.get(GET_PRODUCT_LIST)
      setProducts(productsData)
    } catch (error) {
      // console.log(error)
      alert("서비스가 어렵습니다.")
    }
  }

  useEffect(() => {
    getProduct()
  }, [])
  return (
    <>
      <h2>마운트 시에 API GET 데이터 가져오기 패턴 1</h2>
      {products
        ? products.products.map((p: any) => <div key={p.id}>{p.title}</div>)
        : "Loading..."}
    </>
  )
}
