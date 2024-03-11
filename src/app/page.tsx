/* eslint-disable @next/next/no-img-element */
"use client";
import Banner from "./components/Banner";
import BannerAboutSlider from "./components/BannerAboutSlider";
import BannerBlog from "./components/BannerBlog";
import BannerBlogSlider from "./components/BannerBlogSlider";
import BannerCard from "./components/BannerCard";
import BannerDropDown from "./components/BannerDropDown";
import BannerIconsSlider from "./components/BannerIconsSlider";
import BannerLogo from "./components/BannerLogo";
import BannerOurWork from "./components/BannerOurWork";
import BannerOurworkslider from "./components/BannerOurworkslider";
import BannerReview from "./components/BannerReview";
import BannerReviewslider from "./components/BannerReviewslider";
import BannerServiceSlider from "./components/BannerServiceSlider";
import BannerSlider from "./components/BannerSlider";
import Footer from "./components/Footer";
import FooterCard from "./components/FooterCard";


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
