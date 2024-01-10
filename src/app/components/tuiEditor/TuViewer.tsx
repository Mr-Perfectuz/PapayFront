import React, { useRef } from "react";
import { Box, Stack } from "@mui/material";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";

export const TuViewer = (props: any) => {
  const editorRef = useRef();
  const { chosenSingleBoArticle } = props;
  return (
    <Stack
      sx={{
        width: "800px",
        background: "white",
        mt: "30px",
        borderRadius: "10px",
      }}
      className="tu_viewer"
    >
      <Box sx={{ m: "40px" }}>
        <Viewer
          // @ts-ignore
          ref={editorRef}
          initialValue={chosenSingleBoArticle?.art_content}
          height={"600px"}
        />
      </Box>
    </Stack>
  );
};
