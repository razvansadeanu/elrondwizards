import React from "react";
import { routeNames } from "routes";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// prettier-ignore

const Banner = () => {
  return (
    <div className="swiper-section container">
        <div id="tsum-tabs">

            <input id="tab1" type="radio" name="tabs" defaultChecked/>
            <label htmlFor="tab1">Collection name</label>

            <input id="tab2" type="radio" name="tabs"/>
            <label htmlFor="tab2">Collection name</label>

            <section id="content1">
                <Swiper
                    spaceBetween={8}
                    slidesPerView={4}
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
                        <img className="img-fluid wizard-nft" src="/wizard-1.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-2.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-3.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-4.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-1.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-2.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-3.png" alt="wizard-nft"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-fluid wizard-nft" src="/wizard-4.png" alt="wizard-nft"/>
                    </SwiperSlide>


                </Swiper>
            </section>

            <section id="content2">
                <Swiper
                    spaceBetween={8}
                    slidesPerView={4}
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

        </div>

    </div>
  );
};

export default Banner;
