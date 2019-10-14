const debounce = (fn, ms = 0) => {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };


const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
