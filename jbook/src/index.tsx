import ReactDOM from "react-dom";

import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit me</button>
      </div>
      <pre></pre>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
