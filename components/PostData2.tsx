import axios from "axios"
import { ChangeEventHandler, useState } from "react"
import { POST_PRODUCT } from "../utils/API_URL"

export default function PostData2() {
  const [title, setTitle] = useState<string>()
  const [newProduct, setNewProduct] = useState<any>()

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(POST_PRODUCT, { title })
      setNewProduct(data)
      alert("성공적으로 상품을 추가했습니다.")
    } catch (error) {
      alert("데이터를 추가하는 과정에서 문제가 생겼습니다.")
    }
  }

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setTitle(value)

  return (
    <>
      <h2>
        API POST 데이터 추가하기 패턴 2
        <br />: onChange Input 이용
      </h2>
      <input
        type="text"
        value={title}
        placeholder="추가하려는 상품 제목을 입력해주세요."
        onChange={handleTitleChange}
      />
      <button onClick={handleSubmit}>상품 추가하기</button>
      {JSON.stringify(newProduct)}
    </>
  )
}
