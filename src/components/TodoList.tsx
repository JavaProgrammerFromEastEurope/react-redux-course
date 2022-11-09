import React, { FC, useEffect } from "react";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const TodoList: FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(state => state.todo)
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Process Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      {todos.map(todo =>
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      )}
      <div
        style={{ display: 'flex' }}>
        {pages.map(page =>
          <div
            onClick={() => setTodoPage(page)}
            style={{ border: page === page ? '2px solid green' : '1px solid gray', padding: 10 }}
          >
            {page}
          </div>
        )}
      </div>
    </>
  )
}

export default TodoList;
