import axios from "axios"
import { useEffect, useState } from "react"
import { GET_PRODUCT_LIST } from "../utils/API_URL"

export default function GetDataAtMount2() {
  const [products, setProducts] = useState<any>()

  useEffect(() => {
    axios
      .get(GET_PRODUCT_LIST)
      .then(({ data }): any => setProducts(data))
      .catch((error) => {
        // console.log(error)
        alert("서비스가 어렵습니다.")
      })
  }, [])

  return (
    <>
      <h2>마운트 시에 API GET 데이터 가져오기 패턴 2</h2>
      {products
        ? products.products.map((p: any) => <div key={p.id}>{p.title}</div>)
        : "Loading..."}
    </>
  )
}
