import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function Events() {
  const eventlist = [
    {
      title: "Boyin Foodga marhamat",
      desc: "Yangicha uslubda yangucha tam va his",
      author: "Abdurahmon Mufid",
      date: "2022/09/01",
      location: "Tashkent, Nurafshun ko'cha",
      img: "/restaurant/boyinFood_res.jpg",
    },
    {
      title: "Katta chegirma belisimoda",
      desc: "Faqat 25 - 31 iyul kumlari aniqa Pitsa yegani tashrif buyuring",
      author: "Belisimo",
      date: "2022/07/25",
      location: "Tashkent, Chilonzorsaf",
      img: "/restaurant/belissimo_res.jpg",
    },
    {
      title: "Hali his qilmagan hisni his qilmoqchimisiz ?",
      desc: "Merhaba promokodi orqali 50% chegirmani qo'lga kiriting",
      author: "Chicken house",
      date: "2022/09/24",
      location: "Tashkent, Qo'yliq",
      img: "/restaurant/merhaba_res.jpg",
    },
    {
      title: "Yangicha Yondashuv Endi Uzbekistonda",
      desc: "Uzbekistondagi eng yirik ulgurchi bozor\n",
      author: "Food city",
      date: "2022/08/01",
      location: "Tashkent, Yagni qo'yliq",
      img: "/restaurant/foodCity_res.jpg",
    },
  ];
  return (
    <div className="events_frame">
      <Container sx={{ overflow: "hidden" }}>
        <Stack className="events_main">
          <Box className="events_text">Hodisalar</Box>
          <Box className="prev_next_frame">
            <img
              src="/icons/arrow_left.svg"
              alt="left arow icon"
              className="swiper-button-prev"
            />
            <div className={"dot_frame_pagination  swiper-pagination"}></div>
            <img
              className={"swiper-button-next"}
              src="/icons/arrow_right.svg"
              alt="left arow icon"
            />
          </Box>

          <Swiper
            className="events_info"
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {eventlist.map((value, number) => (
              <SwiperSlide className="events_info_frame" key={value.date}>
                <div className="events_img">
                  <img
                    src={value.img}
                    alt="resturant img"
                    className="events_img"
                  />
                </div>
                <Box className="events_decs">
                  <Box className="events_btm">
                    <Box className="btm_left">
                      <div className="events_title_speaker">
                        <strong>{value.title}</strong>
                        <div className="event_organizator">
                          <img
                            src="/icons/speaker.svg"
                            alt="speaker icon"
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "10px",
                            }}
                          />
                          <p className="spec_text_author">{value.author}</p>
                        </div>
                      </div>
                      <p className="text_desc" style={{ marginTop: "10px" }}>
                        {value.desc}
                      </p>
                      <div className="btm_info" style={{ marginTop: "10px" }}>
                        <div
                          className="btm_info_main"
                          style={{ alignItems: "center" }}
                        >
                          <img
                            src="/icons/calendar.svg"
                            alt="calendar icon"
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "10px",
                            }}
                          />
                          {value.date}
                        </div>
                        <div className="btm_info_main">
                          <img
                            src="/icons/location.svg"
                            alt="calendar icon"
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "10px",
                            }}
                          />
                          <p className="btm_info_main_txt">{value.location}</p>
                        </div>
                      </div>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
