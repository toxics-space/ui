import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { loadTime } from "../services/current_time.service";
import { MyEditor } from './Editor/Editor';
 
export function App () {
  const [text, setText] = useState('');

  useEffect(() => {
    async function run() {
      const time = await loadTime();
      setText(JSON.stringify(time, undefined, 2));
    }

    run();
  }, []);

  return <Box>
    <MyEditor text={text}/>
  </Box>
}