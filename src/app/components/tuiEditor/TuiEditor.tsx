import React, { useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

export const TuiEditor = (props: any) => {
  const editorRef = React.createRef();

  //   const editorRef = useRef<HTMLDivElement>(null);
  return (
    <Stack flexDirection={"column"}>
      <Stack className="tui_editor" flexDirection={"row"}>
        <Box className="form_category">
          <Typography className="form_category_title" variant="h3">
            Category
          </Typography>
          <FormControl className="form_control">
            <Select
              value={"celebrity"}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <span>Categoriyani Tanlang</span>
              </MenuItem>
              <MenuItem value="celebrity">Mashhurlar</MenuItem>
              <MenuItem value="evaluation">Restaurant baho</MenuItem>
              <MenuItem value="story">Mening Hikoyam</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box className="form_category">
          <Typography className="form_category_title" variant="h3">
            Mavzu
          </Typography>
          <TextField
            className="form_textfield"
            id="filled-basic"
            label="Mavzu"
            variant="filled"
          />
        </Box>
      </Stack>

      <Editor
        initialValue="Type here"
        placeholder="Type here"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        // @ts-ignore
        ref={editorRef}
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["image", "table", "link"],
          ["ul", "ol", "task"],
        ]}
        hooks={{
          addImageBlobHook: async (image: any, callback: any) => {
            return false;
          },
        }}
        events={{ load: function (param: any) {} }}
      />
      <Stack alignItems={"center"} sx={{ mt: "30px" }}>
        <Button className="tui_edidor_register_btn" variant="contained">
          Register
        </Button>
      </Stack>
    </Stack>
  );
};
