import { useState } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";

const CodeCell = () => {
  const [code] = useState("");
  const [input, setInput] = useState("");
  const initialValue = "const name = 'jake'";

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <CodeEditor
          initialValue={initialValue}
          onChange={(value) => {
            setInput(value);
          }}
        />

        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
