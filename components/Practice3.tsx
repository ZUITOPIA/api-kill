import axios from "axios"
import { ChangeEventHandler, useState } from "react"
import { PT_ADDTODO } from "../utils/API_URL"

export default function InputTodos() {
  const [todoTitle, setTodoTitle] = useState<any>()
  const [addTodo, setAddTodo] = useState<any>()

  const handleAddTodo = async () => {
    try {
      const { data } = await axios.post(PT_ADDTODO, { todoTitle })
      setAddTodo(data)
      alert("성공적인 추가")
    } catch (error) {
      alert("에러 발생")
    }
  }

  const handleAddTodoChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }, // { } 조심
  }) => setTodoTitle(value)

  return (
    <>
      <h2>input 창에서 입력받은 값을 POST로 todo 추가</h2>
      <input
        type="text"
        value={todoTitle}
        placeholder="새로운 TODO를 입력하세요."
        onChange={handleAddTodoChange}
      />
      <button onClick={handleAddTodo}>추가</button>
      {JSON.stringify(addTodo)}
      {/* 데이터 새로 입력받을거라 로딩중 필요 없음 */}
    </>
  )
}

// 계속 400 에러
