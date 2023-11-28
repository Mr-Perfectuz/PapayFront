import React from "react";
import { Box, Stack } from "@mui/material";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

export const TuViewer = (props: any) => {
  const editorRef = React.createRef();

  return (
    <Stack className="tu_viewer">
      <Box sx={{ mt: "40px" }}>
        <Editor
          initialValue={props.text}
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={false}
          // @ts-ignore
          ref={editorRef}
        />
      </Box>
    </Stack>
  );
};
