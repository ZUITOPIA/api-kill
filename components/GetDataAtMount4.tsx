import useSWR from "swr"
import { useEffect } from "react"
import { GET_PRODUCT_LIST } from "../utils/API_URL"
import { fetcher } from "../utils/fetcher"

export default function GetDataAtMount4() {
  const { data: products, error } = useSWR(GET_PRODUCT_LIST, fetcher)

  useEffect(() => {
    if (error) alert("서비스 이용에 문제가 생겼습니다.")
  }, [error])

  return (
    <>
      <h2>
        마운트 시에 API GET 데이터 가져오기 패턴 4
        <br />: SWR 사용
      </h2>
      {products !== undefined
        ? products.products.map((p: any) => <div key={p.id}>{p.title}</div>)
        : "Loading..."}
    </>
  )
}
