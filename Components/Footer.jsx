import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-around bg-black py-5 items-center">
      <Image src={assets.logo_light} width={120} />
      {/* <p className="text-sm text-white">
        All right reserved. Copyright @blogger
      </p> */}
      {/* <div className='flex'>
            <Image src={assets.facebook_icon} width={40} />
            <Image src={assets.twitter_icon} width={40} />
            <Image src={assets.googleplus_icon} width={40} />
        </div> */}
    </div>
  );
};

export default Footer;
