// async await + try catch + useEffect 세트
// 중요1, AXIOS GET + try,catch 이용
// 중요2, 항상 데이터 가져오기 전까지 loading 처리 해주기

import axios from "axios"
import { useEffect, useState } from "react"
import { PT_TODOLIST } from "../utils/API_URL"

export default function GetPT() {
  const [todoList, setTodoList] = useState<any>()

  const getTodoList = async () => {
    try {
      const { data: todos } = await axios.get(PT_TODOLIST)
      setTodoList(todos)
    } catch (error) {
      alert("에러")
    }
  }

  useEffect(() => {
    getTodoList()
  }, [])

  return (
    <>
      <h2>todo list GET 가져오기 연습</h2>
      {todoList
        ? todoList.todos.map((item: any) => <div>{item.todo}</div>)
        : "로딩중입니다.."}
      {console.log(todoList)}
    </>
  )
}
