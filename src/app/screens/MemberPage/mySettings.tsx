import React, { useRef, useState } from "react";
import CloudDownLoadIcon from "@mui/icons-material/CloudDownload";
import { Box, Button, Stack } from "@mui/material";
import { verifierMemberData } from "../../apiServices/vertify";
import { MemberUpdateData } from "../../../types/user";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import { sweetErrorHandling } from "../../../lib/sweetAlert";

export default function MySettings() {
  // INITIALIZATIONS
  const [file, setFile] = useState(verifierMemberData?.mb_image);
  // const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [memberUpdate, setMemberUpdate] = useState<MemberUpdateData>({
    mb_nick: "",
    mb_adress: "",
    mb_phone: "",
    mb_description: "",
    mb_image: "",
  });

  //  HANDLERS
  const changeMemberNickHandler = (e: any) => {
    memberUpdate.mb_nick = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };

  const changeMemberPhoneHandler = (e: any) => {
    memberUpdate.mb_phone = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberAdressHandler = (e: any) => {
    memberUpdate.mb_adress = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberDescriptionHandler = (e: any) => {
    memberUpdate.mb_description = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };

  const handleImagePreview = (e: any) => {
    try {
      console.log(e.target.files);
      const file = e.target.files[0];

      const fileType = file["type"];
      const validTypes = ["/image/jpg", "image/jpeg", "image/png"];
      assert.ok(validTypes.includes(fileType), Definer.input2);

      memberUpdate.mb_image = file;
      setMemberUpdate({ ...memberUpdate });
      setFile(URL.createObjectURL(file));
    } catch (error) {
      console.log(error);
      sweetErrorHandling(error);
    }
  };

  return (
    <Stack className="my_settings_page">
      <Stack flexDirection={"row"} className="my_settings_page_inner">
        <Box className="member_media_frame">
          <img
            src={file ?? "/auth/user.svg"}
            alt="user img"
            className="my_settings_img"
          />
        </Box>
        <Stack className="img_upload_wrapper">
          <Box className="upload_img">Rasm yuklash</Box>
          <Box className="upload_img_type">
            JPG, JPEG, PNG rasmlarini yuklay olasiz!
          </Box>
          <Button
            component="label"
            style={{ border: "none" }}
            onChange={handleImagePreview}
          >
            <CloudDownLoadIcon />
            <input
              type="file"
              // ref={fileInputRef}
              hidden
              id="file"
              className="upload_input"
              onChange={handleImagePreview}
            />
          </Button>
        </Stack>
      </Stack>
      <Stack flexDirection={"column"} sx={{ mt: "25px" }}>
        <Box className="input_name">
          <label htmlFor="">Ism</label>
          <input
            type="text"
            name="mb_nick"
            placeholder={verifierMemberData?.mb_nick}
            onClick={changeMemberNickHandler}
          />
        </Box>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Box className="input_number">
            <label htmlFor="">Telefon raqam</label>
            <input
              type="text"
              name="mb_number"
              placeholder={verifierMemberData?.mb_phone}
              onClick={changeMemberPhoneHandler}
            />
          </Box>
          <Box className="input_adress">
            <label htmlFor="">Manzil</label>
            <input
              type="text"
              name="mb_adress"
              placeholder={
                verifierMemberData?.mb_adress ?? "Manzil kiritilmagan !"
              }
              onClick={changeMemberAdressHandler}
            />
          </Box>
        </Stack>
        <Box className="input_info">
          <label htmlFor="">Ma’lumot</label>
          <textarea
            className="input_info_textarea"
            name="mb_description"
            placeholder={
              verifierMemberData?.mb_description ??
              " Salom, Men Papays  Developerlar uyushmasiman!"
            }
            onClick={changeMemberDescriptionHandler}
          ></textarea>
        </Box>
        <Box className="save_btn" alignItems={"flex-end"}>
          <Button variant="contained">Saqlash</Button>
        </Box>
      </Stack>
    </Stack>
  );
}
