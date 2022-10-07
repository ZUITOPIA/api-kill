import axios from "axios"
import { useState } from "react"
import { GET_PRODUCT_LIST, POST_PRODUCT } from "../utils/API_URL"

export default function PostData1() {
  const [products, setProducts] = useState<any>()
  const handleData = async () => {
    try {
      await axios.post(
        POST_PRODUCT, // 새로운 데이터가 추가되어야 할 URL
        { title: "추가할 타이틀!!!!!!!!!!" },
        { headers: { "Content-Type": "application/json" } },
      )
      await axios
        .get(GET_PRODUCT_LIST) // 추가된 데이터 전체를 불러오기 위한 URL
        .then((res) => {
          setProducts(res.data)
          // 이 API는 공짜라서 추가 안 됐지만 원래는 새로 추가된 데이터를 포함한 모든 Product 데이터가 들어있어야 함
        })
        .catch(() => alert("데이터를 불러오는 것에 문제가 생겼습니다."))
    } catch (error) {
      alert("데이터를 추가하는 과정에서 문제가 생겼습니다.")
    }
  }
  return (
    <>
      <h2>API POST 데이터 추가하기 패턴 1</h2>
      <button onClick={handleData}>상품 추가하기</button>
      {products
        ? products.products.map((p: any) => <div key={p.id}>{p.title}</div>)
        : "Loading..."}
    </>
  )
}
