import Header from "../components/Base/Header";
import LabelBrowseTheRoom from "../components/BrowseTheRoom/LabelBrowseTheRoom";
import ImageBackground from "../components/ImageBackground";
import JustArrivedItem from "../components/JustArrived/JustArrivedItem";
import SideMenuGroupItem from "../components/SideMenu/SideMenuGroupItem";
import Footer from "../components/Base/Footer";

import LivingRoomImg from "../assets/images/content/image-catalog-1.png";
import ChildrenRoomImg from "../assets/images/content/image-catalog-2.png";
import DecorationRoomImg from "../assets/images/content/image-catalog-3.png";
import LivingRoom2Img from "../assets/images/content/image-catalog-4.png";
import AdobeImg from "../assets/images/content/logo-adobe.svg";
import IkeaImg from "../assets/images/content/logo-ikea.svg";
import HermanMillerImg from "../assets/images/content/logo-hermanmiller.svg";
import MieleImg from "../assets/images/content/logo-miele.svg";
import LogoImg from "../assets/images/content/logo.png";
import HeroImages from "../assets/images/content/image-section-1.png";

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="flex flex-row" id="hero">
        <div className="absolute z-20 self-center w-full md:flex-1 md:relative text-center content-center">
          <h1 className="text-3xl md:text-5xl font-semibold">
            The Room <br />
            You’ve Dreaming
          </h1>
          <p className="mt-5 md:text-lg">
            Kami menyediakan furniture berkelas <br />
            yang membuat ruangan terasa homey
          </p>
          <button className="md:text-lg font-medium mt-8 bg-pink-200 text-black hover:bg-black hover:text-pink-300 px-6 py-2 rounded-full">
            Explore Now
          </button>
        </div>
        <div className="flex-1 text-center">
          <div className="relative flex group">
            <div className="absolute bg-black opacity-0 group-hover:opacity-30 w-full h-full z-10"></div>
            <a
              href="#"
              className="absolute bg-button-play w-10 h-10 z-20 bg-blue-200 p-7 rounded-full bg-no-repeat bg-center top-full -translate-x-20 -translate-y-8 left-full md:top-1/2 md:left-1/2 md:-translate-y-10 md:translate-x-0"
            ></a>
            <img
              src={HeroImages}
              className="bg-cover min-h-dvh md:min-h-0 size-full object-cover object-center"
              alt="Hero Images"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100" id="browse-the-room">
        <div className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-semibold pt-10">
            Browse The Room <br /> That We Designed For You
          </h2>
          <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-9 gap-6 mt-8">
            <div className="relative rounded-lg col-span-1 row-span-1 md:col-span-4 min-h-44 overflow-hidden shadow-sm hover:shadow-lg">
              <ImageBackground background={LivingRoomImg} />
              <div className="absolute size-full flex flex-col justify-center">
                <div className="flex flex-col z-10 text-black w-2/5 self-end">
                  <LabelBrowseTheRoom
                    title="Living Room"
                    items="18,309 items"
                  />
                </div>
              </div>
            </div>
            <div className="relative rounded-lg min-h-44 col-span-1 row-span-1 md:col-span-2 md:row-span-2 overflow-hidden shadow-sm hover:shadow-lg">
              <ImageBackground background={DecorationRoomImg} />
              <div className="absolute size-full flex flex-col justify-center md:justify-start md:mt-6 md:text-center">
                <div className="flex flex-col z-10 text-black w-2/5 md:w-full self-end  md:self-center">
                  <LabelBrowseTheRoom title="Decoration" items="77,392 items" />
                </div>
              </div>
            </div>
            <div className="relative rounded-lg min-h-44 col-span-1 row-span-1 md:col-span-3 md:row-span-2 overflow-hidden shadow-sm hover:shadow-lg">
              <ImageBackground background={LivingRoom2Img} />
              <div className="absolute size-full flex flex-col justify-center md:justify-start md:mt-6 md:text-center">
                <div className="flex flex-col z-10 text-black w-2/5 md:w-full self-end md:self-center">
                  <LabelBrowseTheRoom title="Bed Room" items="22,094 items" />
                </div>
              </div>
            </div>
            <div className="relative rounded-lg min-h-44 md:col-span-4 overflow-hidden shadow-sm hover:shadow-lg">
              <ImageBackground background={ChildrenRoomImg} />
              <div className="absolute size-full flex flex-col justify-center">
                <div className="flex flex-col z-10 text-black w-2/5 self-end">
                  <LabelBrowseTheRoom title="Children Room" items="837 items" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col py-20" id="just-arrived">
        <div className="container mx-auto mb-16">
          <h3 className="text-center font-semibold text-3xl">
            Just Arrived
            <br />
            This Summer For You
          </h3>
        </div>
        <div className="flex flex-row gap-7 overflow-x-hidden ps-28">
          <JustArrivedItem />
          <JustArrivedItem />
          <JustArrivedItem />
          <JustArrivedItem />
          <JustArrivedItem />
          <JustArrivedItem />
          <JustArrivedItem />
        </div>
      </section>
      <section id="clients" className="mb-10">
        <div className="container mx-auto px-4 pb-10">
          <div className="flex flex-col md:flex-row gap-14 justify-center">
            <img src={AdobeImg} alt="client" className="max-h-10" />
            <img src={IkeaImg} alt="client" className="max-h-10" />
            <img src={HermanMillerImg} alt="client" className="max-h-10" />
            <img src={MieleImg} alt="client" className="max-h-10" />
          </div>
        </div>
      </section>
      <section id="side-menu">
        <div className="border-y border-gray-200 py-20">
          <div className="container flex flex-col mx-auto gap-10 md:gap-20 items-center">
            <img
              src={LogoImg}
              alt="Logo"
              className="max-h-10 object-contain object-center"
            />
            <div className="flex flex-col gap-10 md:flex-row md:gap-32 justify-center">
              <SideMenuGroupItem label="Overview">
                <span>Shipping</span>
                <span>Refund</span>
                <span>Promotion</span>
              </SideMenuGroupItem>
              <SideMenuGroupItem label="Company">
                <span>About</span>
                <span>Career</span>
                <span>Contact Us</span>
              </SideMenuGroupItem>
              <SideMenuGroupItem label="Explore">
                <span>Terms & Conds</span>
                <span>Privacy Policy</span>
                <span>For Developer</span>
              </SideMenuGroupItem>
              <SideMenuGroupItem label="Special Letter">
                <div className="flex bg-gray-100 rounded-xl">
                  <input
                    type="email"
                    placeholder="Your email adress"
                    className="bg-transparent ms-6 outline-none focus:outline-none text-gray-800 min-w-[300px]"
                  />
                  <button className="bg-pink-200 p-3 rounded-xl ms-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.6177 0.411971C23.6163 0.410624 23.6152 0.409187 23.6138 0.407839C23.6124 0.406492 23.6109 0.405414 23.6095 0.404157C23.236 0.049307 22.7002 -0.0573008 22.2098 0.126411L0.833871 8.13353C0.268743 8.34518 -0.0623361 8.87521 0.0098048 9.4523C0.0821332 10.0294 0.53462 10.4694 1.13589 10.547L11.5833 11.8968C11.6028 11.8994 11.6185 11.9143 11.6212 11.9332L13.0301 21.9417C13.1112 22.5177 13.5704 22.9512 14.1729 23.0204C14.2279 23.0268 14.2824 23.0298 14.3364 23.0298C14.8735 23.0298 15.3486 22.7229 15.5495 22.231L23.9077 1.75274C24.0994 1.28302 23.9882 0.76983 23.6177 0.411971ZM1.30534 9.34475C1.2819 9.34169 1.27136 9.34039 1.26728 9.30788C1.26325 9.27537 1.27319 9.27159 1.29508 9.26347L21.2946 1.77187L11.9404 10.7333C11.8794 10.7163 1.30534 9.34475 1.30534 9.34475ZM14.37 21.7892C14.3614 21.8102 14.358 21.8198 14.3236 21.8158C14.2897 21.8119 14.2883 21.8017 14.2852 21.7794C14.2852 21.7794 12.8535 11.6495 12.8358 11.5911L22.19 2.62972L14.37 21.7892Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </SideMenuGroupItem>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
