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

export default function TodoForm(props) {
  const { addTodo } = props;
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          addTodo(text);
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
