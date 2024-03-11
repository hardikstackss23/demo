import React from 'react'
import Image from "next/image";
import company_logo_1 from "../../../public/aseets/png/company_logo_1.png"
import company_logo_2 from "../../../public/aseets/png/company_logo_2.png"
import company_logo_3 from "../../../public/aseets/png/company_logo_3.png"
import company_logo_4 from "../../../public/aseets/png/company_logo_4.png"
import company_logo_5 from "../../../public/aseets/png/company_logo_5.png"

const BannerLogo = () => {
  return (
    <div className="w-auto h-auto px-16 py-[70px] bg-white flex-col justify-center items-center gap-[75px] flex">
    <div className="flex-col justify-start items-center gap-[61px] flex">
        <div className="opacity-70 justify-center items-center gap-[95px] inline-flex">
        <Image src={company_logo_1} alt="img" />
        <Image src={company_logo_2} alt="img" />
        <Image src={company_logo_3} alt="img" />
        <Image src={company_logo_4} alt="img" />
        <Image src={company_logo_5} alt="img" />
        </div>
    </div>
</div>
  )
}

export default BannerLogo


