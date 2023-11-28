import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Marginer from "../../components/marginer";
import "../../../css/help.css";

export default function HelpPage() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const FAQ = [
    {
      question: "To'lov qanday amalga oshiriladi ? ",
      answer:
        "To'lovni Payme, CLick ilovalari orqali amalga oshirsangiz bo'ladi? ",
    },
    {
      question: "Buyurtma qancha vaqtda yetib keladi ? ",
      answer:
        "Buyurtmalar harid qilgan mahsulotingizga qarab har xil o'rtacha 30-40 minutda yetib keladi ",
    },
    {
      question:
        "Saytdan foydalanganda ma'lumot havfsizlik darajasi ishonchlimi ? ",
      answer:
        "Albatta, bizning dasturchilarimiz sizning ma'lumotlaringizni xavfsizligi uchun javob berishadi",
    },
    {
      question: "To'lov qanday amalga oshiriladi ? ",
      answer:
        "To'lovni Payme, CLick ilovalari orqali amalga oshirsangiz bo'ladi? ",
    },
    {
      question: "Buyurtma qancha vaqtda yetib keladi ? ",
      answer:
        "Buyurtmalar harid qilgan mahsulotingizga qarab har xil o'rtacha 30-40 minutda yetib keladi ",
    },
    {
      question:
        "Saytdan foydalanganda ma'lumot havfsizlik darajasi ishonchlimi ? ",
      answer:
        "Albatta, bizning dasturchilarimiz sizning ma'lumotlaringizni xavfsizligi uchun javob berishadi",
    },
    {
      question: "To'lov qanday amalga oshiriladi ? ",
      answer:
        "To'lovni Payme, CLick ilovalari orqali amalga oshirsangiz bo'ladi? ",
    },
    {
      question: "Buyurtma qancha vaqtda yetib keladi ? ",
      answer:
        "Buyurtmalar harid qilgan mahsulotingizga qarab har xil o'rtacha 30-40 minutda yetib keladi ",
    },
    {
      question:
        "Saytdan foydalanganda ma'lumot havfsizlik darajasi ishonchlimi ? ",
      answer:
        "Albatta, bizning dasturchilarimiz sizning ma'lumotlaringizni xavfsizligi uchun javob berishadi",
    },
    {
      question: "To'lov qanday amalga oshiriladi ? ",
      answer:
        "To'lovni Payme, CLick ilovalari orqali amalga oshirsangiz bo'ladi? ",
    },
    {
      question: "Buyurtma qancha vaqtda yetib keladi ? ",
      answer:
        "Buyurtmalar harid qilgan mahsulotingizga qarab har xil o'rtacha 30-40 minutda yetib keladi ",
    },
    {
      question:
        "Saytdan foydalanganda ma'lumot havfsizlik darajasi ishonchlimi ? ",
      answer:
        "Albatta, bizning dasturchilarimiz sizning ma'lumotlaringizni xavfsizligi uchun javob berishadi",
    },
  ];

  const rules = [
    `Saytdan to'laqonli buyurtma qilish va jonli muloqotdan foydalanishingiz uchun ro'yxatdan o'tishingiz lozim`,
    `    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A repellendus dicta impedit placeat ad unde
     libero aspernatur, culpa tempore facilis eius totam tenetur, iure dolores ducimus quae consequatur blanditiis dolore!
`,
    `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure adipisci distinctio amet saepe animi. Accusantium rem delectus excepturi aspernatur.
`,
    ` Jonli muloqot vaqtida bexayo so'zlarni ishlatish mutlaqo taqiqlanadi.
`,
  ];
  return (
    <div className="help_page">
      <Container>
        <Stack alignItems={"center"}>
          <TabContext value={value}>
            <Stack className="helpPage_wrapper">
              <TabList
                className="help_tablist"
                onChange={handleChange}
                style={{
                  display: "flex",
                  width: "1320px",
                  alignItems: "center",
                }}
              >
                <Tab label="Qoidalar" value="1" />
                <Tab label="FAQ" value="2" />
                <Tab label="Adminga xat " value="3" />
              </TabList>
              <Marginer
                width="300"
                bg="#E4E4E4D4"
                height="1"
                direction="horizontal"
              />
            </Stack>

            <TabPanel value="1">
              <Stack className="helpPage_rules">
                <Stack className="helpPage_rules_wrapper">
                  {rules.map((ele, index) => {
                    return (
                      <Stack key={index}>
                        <p>{ele}</p>
                        <Marginer
                          width="300"
                          bg="#E4E4E4D4"
                          height="1"
                          direction="horizontal"
                        />
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            </TabPanel>

            <TabPanel value="2">
              <Stack className="helpPage_faq">
                {FAQ.map((ele, index) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary
                        id="panelia-header"
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <Typography>{ele.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{ele.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Stack>
            </TabPanel>
            <TabPanel value="3">
              <Stack className="helpPage_Theletter">
                <Box className="AdminLetter_title">Adminga Xabar Qoldirish</Box>
                <Box className="AdminLetter_qs">
                  Assalomu alaykum! Adminga xabar qoldirish uchun pasdagi
                  formlarni to’ldiring!
                </Box>
                <form action="#" method="POST" className="adminLetter">
                  <Box className="Theletter_name">Ism</Box>
                  <input
                    type="text"
                    name="mb_nick"
                    placeholder="Ism"
                    className="letter_name_input"
                  />
                  <Box className="Theletter_email ">Elektron Manzil</Box>
                  <input
                    type="text"
                    name="mb_email"
                    placeholder="Ism"
                    className="letter_name_input"
                  />
                  <Box className="Theletter_email ">Xabar</Box>
                  <textarea
                    name="mb_msg"
                    placeholder="Xabar"
                    className="letter_msg_textarea"
                  />
                  <Stack
                    alignItems={"flex-end"}
                    sx={{ mt: "30px", width: "1100px" }}
                  >
                    <Button
                      className="letter_submit_btn"
                      type="submit"
                      variant="contained"
                    >
                      Jo'natish
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </TabPanel>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
