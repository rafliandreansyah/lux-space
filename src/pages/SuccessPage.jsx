import Footer from "../components/Base/Footer";
import Header from "../components/Base/Header";
import SideMenuGroupItem from "../components/SideMenu/SideMenuGroupItem";
import LogoImg from "../assets/images/content/logo.png";

export default function SuccessPage() {
  return (
    <div className="flex flex-col">
      <Header />

      <section className="bg-gray-100 py-8 px-4 mt-20">
        <div className="container mx-auto">
          <ul className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#" aria-label="current-page">
                Success Checkout
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
              <img
                src="/src/assets/images/content/illustration-success.png"
                alt="congrats illustration"
              />
              <h2 className="text-3xl font-semibold mb-6">
                Ah yes it’s success!
              </h2>
              <p className="text-lg mb-12">
                Furniture yang anda beli akan kami kirimkan saat ini juga so now
                please sit tight and be ready for it
              </p>
              <a
                href="details.html"
                className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
              >
                Back to Shop
              </a>
            </div>
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
                <a
                  href="#"
                  className="hover:underline-offset-1 hover:underline"
                >
                  Shipping
                </a>
                <a
                  href="#"
                  className="hover:underline-offset-1 hover:underline"
                >
                  Refund
                </a>
                <a
                  href="#"
                  className="hover:underline-offset-1 hover:underline"
                >
                  Promotion
                </a>
              </SideMenuGroupItem>
              <SideMenuGroupItem label="Company">
                <a
                  href="#"
                  className="hover:underline-offset-1 hover:underline"
                >
                  About
                </a>
                <a
                  href="#"
                  className="hover:underline-offset-1 hover:underline"
                >
                  Career
                </a>
                <a
                  href="#"
                  className="hover:underline-offset-1 hover:underline"
                >
                  Contact Us
                </a>
              </SideMenuGroupItem>
              <SideMenuGroupItem label="Explore">
                <a
                  href="#"
                  className="hover:underline-offset-1 hover:underline"
                >
                  Terms & Conds
                </a>
                <a
                  href="#"
                  className="hover:underline-offset-1 hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:underline-offset-1 hover:underline"
                >
                  For Developer
                </a>
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
    </div>
  );
}
