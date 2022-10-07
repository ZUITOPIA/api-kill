import axios from "axios"
import { useEffect, useState } from "react"
import { GET_PRODUCT_LIST } from "../utils/API_URL"

export default function GetDataAtMount3() {
  const [products, setProducts] = useState<any>()

  useEffect(() => {
    axios
      // .get(GET_PRODUCT_LIST, { params: { limit: 10, skip: 10 } })
      .get(`${GET_PRODUCT_LIST}?limit=10&skip=10`)
      .then(({ data }): any => setProducts(data))
      .catch((error) => {
        // console.log(error)
        alert("서비스가 어렵습니다.")
      })
  }, [])

  return (
    <>
      <h2>
        마운트 시에 API GET 데이터 가져오기 패턴 3
        <br />: 쿼리파라미터가 있을 때, 사용법 2가지
      </h2>
      {products
        ? products.products.map((p: any) => <div key={p.id}>{p.title}</div>)
        : "Loading..."}
    </>
  )
}
