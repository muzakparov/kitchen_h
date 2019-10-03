import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useImperativeHandle,
  useCallback,
  useMemo,
  useReducer,
  useDebugValue
} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function Todos(props, ref) {
  const [todos, setTodos] = useState([]);

  const valueRef = useRef(null);

  //   todo={text,isCompleted}

  return (
    <div>
      <div>Todos</div>
      <TodoForm
        addTodo={text => {
          setTodos([...todos, { text, isCompleted: false }]);
        }}
      />
      <ul>
        {todos.map((todo, i) => (
          <Todo
            todo={{ id: i, ...todo }}
            rmTodo={i => {
              setTodos([...todos.slice(0, i), ...todos.slice(i + 1)]);
            }}
            toggleTodo={i => {
              setTodos([
                ...todos.slice(0, i),
                { text: todos[i].text, isCompleted: !todos[i].isCompleted },
                ...todos.slice(i + 1)
              ]);
            }}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}
