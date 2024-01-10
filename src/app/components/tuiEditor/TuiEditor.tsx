import React, { useCallback, useRef, useState } from "react";
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
import CommunityApiService from "../../apiServices/communityApiService";
import { BoArticleInput } from "../../../types/boArticles";
import { serviceApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import { useHistory } from "react-router-dom";

export const TuiEditor = (props: any) => {
  const editorRef = React.createRef();
  //INITIALIZATION
  const history = useHistory();
  const [communityArticleData, setCommunityArticleData] =
    useState<BoArticleInput>({
      art_subject: "",
      bo_id: "",
      art_content: "",
      art_image: "",
    });

  //HANDLERS

  const uploadImage = async (image: any) => {
    try {
      const communityService = new CommunityApiService();
      const image_name = await communityService.uploadImageToServer(image);
      const source = `${serviceApi}/${image_name}`;
      return source;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error; // Ensure the error is propagated
    }
  };

  const changeCategoryHandler = (e: any) => {
    communityArticleData.bo_id = e.target.value;
    setCommunityArticleData({ ...communityArticleData });
  };

  const changeTitleHandler = useCallback(
    (e: any) => {
      communityArticleData.art_subject = e.target.value;
      setCommunityArticleData({ ...communityArticleData });
    },
    [communityArticleData.art_subject]
  );

  const handleRegisterButton = async () => {
    try {
      console.log("communityArticleData:::", communityArticleData);
      const editor: any = editorRef.current;
      const art_content = editor?.getInstance().getHTML();
      communityArticleData.art_content = art_content;

      assert.ok(
        communityArticleData.art_content !== "" &&
          communityArticleData.bo_id !== "" &&
          communityArticleData.art_subject !== "",
        Definer.input_err1
      );

      const communityService = new CommunityApiService();
      await communityService.createArticle(communityArticleData);
      await sweetTopSmallSuccessAlert("Article is created successfully !");
      props.setArticlesRebuilt(new Date());
      props.setValue("1");
      // history.push(`/member-page`);
    } catch (err) {
      console.log("ERROR:: uploadImage", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Stack flexDirection={"column"}>
      <Stack className="tui_editor" flexDirection={"row"}>
        <Box className="form_category">
          <Typography className="form_category_title" variant="h3">
            Category
          </Typography>
          <FormControl className="form_control">
            <Select
              value={communityArticleData.bo_id}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={changeCategoryHandler}
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
            onChange={changeTitleHandler}
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
            const uploadImageURL = await uploadImage(image);
            console.log("uploadImageURL:", uploadImage);
            callback(uploadImageURL);
            return false;
          },
        }}
        events={{ load: function (param: any) {} }}
      />
      <Stack alignItems={"center"} sx={{ mt: "30px" }}>
        <Button
          className="tui_edidor_register_btn"
          variant="contained"
          onClick={handleRegisterButton}
        >
          Register
        </Button>
      </Stack>
    </Stack>
  );
};
