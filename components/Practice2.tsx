// todo를 input 창에 입력받고, 기존 todos와 함께 전체 출력하는 component

import axios from "axios"
import { useState } from "react"
import { PT_ADDTODO, PT_TODOLIST } from "../utils/API_URL"

export default function PostPT() {
  const [todos, setTodos] = useState<any>()

  const AddTodo = async () => {
    try {
      await axios.post(PT_ADDTODO, { todo: "밥 먹 기" })
      await axios
        .get(PT_TODOLIST)
        .then((res) => {
          setTodos(res.data)
        })
        .catch(() => {
          alert("데이터를 불러오지 못했습니다.")
        })
    } catch (error) {
      alert("에러")
      console.log(error)
    }
  }

  return (
    <>
      <h2>POST로 todo 추가하고, GET으로 전체 todos 가져오기 연습</h2>
      <button onClick={AddTodo}>데이터 추가하기</button>
      {todos
        ? todos.todos.map((item: any) => <div key={item.id}>{item.todo}</div>)
        : "로딩중입니다.."}
    </>
  )
}

// 계속 400 에러
