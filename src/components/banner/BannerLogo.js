import React from "react";
// import { bannerImg } from "../../assets";

const BannerLogo = () => {
  return (
    <div
      id="img-1"
      className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
    >
      {/* <img
        className="w-[250px] h-[350px] md:w-[350px] md:h-[450px] z-10"
        src={bannerImg}
        alt=""
      /> */}
      <div className="absolute bottom-0 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center "></div>
    </div>
  );
};

export default BannerLogo;
