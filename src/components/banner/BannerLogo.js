import React from "react";
import { bannerImg } from "../../assets";

const BannerLogo = () => {
  return (
    <div id="img-1" className="w-1/2 flex justify-center items-center ">
      <img className="w-[350px] h-[450px] z-10" src={bannerImg} alt="" />
      <div className="absolute bottom-0  bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center "></div>
    </div>
  );
};

export default BannerLogo;
