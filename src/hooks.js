import { useState, useEffect } from "react";

const useFlatListUpdate = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(t => !t);
  }, Array.prototype.slice.call(arguments));

  return toggle;
};

export default useFlatListUpdate;
