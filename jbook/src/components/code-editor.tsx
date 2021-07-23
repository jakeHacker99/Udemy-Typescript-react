import React from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <MonacoEditor
      height="300px"
      theme="dark"
      language="javascript"
      options={{
        wordWrap: "on",
      }}
    />
  );
};

export default CodeEditor;
