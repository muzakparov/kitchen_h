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

//use other hooks
export default function Todo(props, ref) {
  const { todo } = props;

  return (
    <li
      onClick={() => {
        props.toggleTodo(todo.id);
      }}
      style={todo.isCompleted ? { textDecoration: "line-through" } : {}}
    >
      {todo.text}
      <button
        onClick={e => {
          e.stopPropagation();
          props.rmTodo(todo.id);
        }}
      >
        X
      </button>
    </li>
  );
}
