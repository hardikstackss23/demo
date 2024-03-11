/* eslint-disable @next/next/no-img-element */
"use client";
import Banner from "./Components/Banner";
import BannerAboutSlider from "./Components/BannerAboutSlider";
import BannerBlog from "./Components/BannerBlog";
import BannerBlogSlider from "./Components/BannerBlogSlider";
import BannerCard from "./Components/BannerCard";
import BannerDropDown from "./Components/BannerDropDown";
import BannerIconsSlider from "./Components/BannerIconsSlider";
import BannerLogo from "./Components/BannerLogo";
import BannerOurWork from "./Components/BannerOurWork";
import BannerOurworkslider from "./Components/BannerOurworkslider";
import BannerReview from "./Components/BannerReview";
import BannerReviewslider from "./Components/BannerReviewslider";
import BannerServiceSlider from "./Components/BannerServiceSlider";
import BannerSlider from "./Components/BannerSlider";
import Footer from "./Components/Footer";
import FooterCard from "./Components/FooterCard";


export default function Page() {
  return (
    <>
      <div className="flex flex-col min-h-auto ">
        <main>
          <div className="flex-grow flex justify-center items-center">
            <Banner />
          </div>
          <BannerSlider />
          <BannerAboutSlider />
          <BannerCard />
          <BannerServiceSlider/>
          <BannerDropDown />
          <BannerOurworkslider />
          <BannerOurWork/>
          <BannerReviewslider />
          <BannerReview />
          <BannerIconsSlider />
          {/* <BannerLogo/> */}
          <BannerBlogSlider />
          <BannerBlog />
          <FooterCard />
          <Footer />
        </main>
      </div>
    </>
  );
}
