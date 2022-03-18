import React, { useState } from "react";
import { routeNames } from "routes";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import * as $ from "jquery";
// Import Swiper styles
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

// prettier-ignore
const SecondSlider = () => {

  return (


            <section id="content2">
                <Swiper
                    spaceBetween={8}
                    slidesPerView={4}
                    pagination={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-4.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-3.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-2.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-1.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-4.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-3.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-2.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-1.png" alt="wizard-nft"/>
                    </SwiperSlide>


                </Swiper>
            </section>

  );
};

export default SecondSlider;
