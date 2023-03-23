import { useEffect, useState } from 'react'
import './style/main.scss'
import TodoCard from './components/todoCard/TodoCard'
import { useAppSelector } from './hooks/redux'
import AddTodo from './components/addTodo/AddTodo'
import { ITodo } from './model/ITodo'
import EditTodo from './components/editTodo/EditTodo'
import SearchPanel from './components/searchPanel/SearchPanel'


const App = () => {
  const [modal, setmodal] = useState<boolean>(false)
  const [activeCard, setactiveCard] = useState<ITodo>({
    name: "",
    description: "",

  })

  const todoListSelector = useAppSelector((e) => e.todos.todos)
  const [todoList, setTodoList] = useState(todoListSelector)
  const [search, setSearch] = useState("")

  useEffect(() => {
    setTodoList(todoListSelector)
    if (search.startsWith('#')) {
      setTodoList(todoListSelector.filter((e) => e.description.includes(search)))


    }
    if (!search.startsWith('#') && search.length > 1) {
      setTodoList([])
    }



  }, [todoListSelector, search])



  return (
    <div className="main">
      <div className='wrapperMain'>
        <SearchPanel
          search={search}
          setSearch={setSearch}
        />
        <AddTodo />

        {todoList.length ? todoList.map((e, i) => {
          return <TodoCard
            key={i}
            setModal={setmodal}
            name={e.name}
            description={e.description}
            setactiveCard={setactiveCard} />
        }) : <h2>There's nothing</h2>}

        <EditTodo
          setmodal={setmodal}
          modal={modal}
          activeCard={activeCard}
         
        />




      </div>
    </div >
  )
}

export default App