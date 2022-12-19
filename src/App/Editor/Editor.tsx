import React from "react";
import Editor from "@monaco-editor/react";

export function MyEditor(p: {text: string}) {
  // const monaco = useMonaco();
  // useEffect(() => {
  //   if (monaco) {
  //     const es = monaco.editor;
  //     console.log(es);
  //     console.log("here is the monaco instance:", monaco);
  //   }
  // }, [monaco, p.text]);

  return <>
    <Editor
      height="90vh"
      width="100vw"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      value={p.text}
   />
  </>;
}