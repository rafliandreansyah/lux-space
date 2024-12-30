import Footer from "../components/Base/Footer";
import Header from "../components/Base/Header";
import LogoImg from "../assets/images/content/logo.png";
import SideMenuGroupItem from "../components/SideMenu/SideMenuGroupItem";

export default function DetailProductPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <section id="breadcrumb" className="py-4 bg-gray-100 w-full mt-20">
        <div className="container mx-auto">
          <ul className="flex gap-6 ms-4 md:ms-0">
            <li>
              <a href="#" className="font-thin">
                Home
              </a>
            </li>
            <ul>
              <span className="font-thin">/</span>
            </ul>
            <ul>
              <a href="#" className="font-thin">
                Office Room
              </a>
            </ul>
            <ul>
              <span className="font-thin">/</span>
            </ul>
            <ul>
              <span className="font-semibold">Detail</span>
            </ul>
          </ul>
        </div>
      </section>
      {/* <section className="container mx-auto py-28">
        <div className="flex gap-16">
          <div className="flex gap-7">
            <div className="flex flex-col justify-between">
              <div className="size-24 bg-slate-300 rounded-lg"></div>
              <div className="size-24 bg-slate-300 rounded-lg"></div>
              <div className="size-24 bg-slate-300 rounded-lg"></div>
              <div className="size-24 bg-slate-300 rounded-lg"></div>
              <div className="size-24 bg-slate-300 rounded-lg"></div>
            </div>
            <div className="w-[500px] h-[600px] bg-slate-300 rounded-lg"></div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-5xl font-semibold">Chair Thatty</h2>
            <p className="mt-3">IDR 12.000.000</p>
            <a
              href="cart.html"
              className="transition-all duration-200 bg-pink-200 text-black focus:bg-black focus:text-pink-200 rounded-full px-8 py-3 mt-4 inline-flex w-fit"
            >
              <svg
                className="fill-current mr-3"
                width="26"
                height="24"
                viewBox="0 0 26 24"
              >
                <path d="M10.8754 18.7312C9.61762 18.7312 8.59436 19.7115 8.59436 20.9164C8.59436 22.1214 9.61762 23.1017 10.8754 23.1017C12.1331 23.1017 13.1564 22.1214 13.1564 20.9164C13.1563 19.7115 12.1331 18.7312 10.8754 18.7312ZM10.8754 21.8814C10.3199 21.8814 9.86796 21.4485 9.86796 20.9163C9.86796 20.3842 10.3199 19.9512 10.8754 19.9512C11.4308 19.9512 11.8828 20.3842 11.8828 20.9163C11.8828 21.4486 11.4308 21.8814 10.8754 21.8814Z" />
                <path d="M18.8764 18.7312C17.6186 18.7312 16.5953 19.7115 16.5953 20.9164C16.5953 22.1214 17.6186 23.1017 18.8764 23.1017C20.1342 23.1017 21.1575 22.1214 21.1575 20.9164C21.1574 19.7115 20.1341 18.7312 18.8764 18.7312ZM18.8764 21.8814C18.3209 21.8814 17.869 21.4485 17.869 20.9163C17.869 20.3842 18.3209 19.9512 18.8764 19.9512C19.4319 19.9512 19.8838 20.3842 19.8838 20.9163C19.8838 21.4486 19.4319 21.8814 18.8764 21.8814Z" />
                <path d="M19.438 7.2262H10.3122C9.96051 7.2262 9.67542 7.49932 9.67542 7.83626C9.67542 8.1732 9.96056 8.44632 10.3122 8.44632H19.438C19.7897 8.44632 20.0748 8.1732 20.0748 7.83626C20.0748 7.49927 19.7897 7.2262 19.438 7.2262Z" />
                <path d="M18.9414 10.3942H10.8089C10.4572 10.3942 10.1721 10.6673 10.1721 11.0042C10.1721 11.3412 10.4572 11.6143 10.8089 11.6143H18.9413C19.293 11.6143 19.5781 11.3412 19.5781 11.0042C19.5781 10.6673 19.293 10.3942 18.9414 10.3942Z" />
                <path d="M25.6499 4.508C25.407 4.22245 25.0472 4.05871 24.6626 4.05871H4.82655L4.42595 2.19571C4.34232 1.80709 4.06563 1.48078 3.68565 1.32272L0.890528 0.160438C0.567841 0.0261566 0.192825 0.168008 0.0528584 0.477043C-0.0872597 0.786176 0.0608116 1.14549 0.383347 1.27957L3.17852 2.4419L6.2598 16.7708C6.38117 17.3351 6.90578 17.7446 7.50723 17.7446H22.7635C23.1152 17.7446 23.4003 17.4715 23.4003 17.1346C23.4003 16.7976 23.1152 16.5245 22.7635 16.5245H7.50728L7.13247 14.7815H22.8814C23.4828 14.7815 24.0075 14.3719 24.1288 13.8076L25.9101 5.52488C25.9876 5.16421 25.8928 4.79349 25.6499 4.508ZM22.8814 13.5615H6.87012L5.08895 5.27879L24.6626 5.27884L22.8814 13.5615Z" />
              </svg>
              Add to Cart
            </a>
            <hr className="my-8" />
          </div>
        </div>
      </section> */}
      <section className="container mx-auto">
        <div className="flex flex-wrap my-4 md:my-12">
          <div className="w-full md:hidden px-4">
            <h2 className="text-5xl font-semibold">Chair Thatty</h2>
            <span className="text-xl">IDR 12.000.000</span>
          </div>
          <div className="flex-1">
            <div className="slider">
              <div className="thumbnail">
                <div className="px-2">
                  <div
                    className="item selected"
                    data-img="/src/assets/images/content/showcase-1.front.jpg"
                  >
                    <img
                      src="/src/assets/images/content/showcase-1.front.jpg"
                      alt="front"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <div className="px-2">
                  <div
                    className="item"
                    data-img="/src/assets/images/content/showcase-1.back.jpg"
                  >
                    <img
                      src="/src/assets/images/content/showcase-1.back.jpg"
                      alt="back"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <div className="px-2">
                  <div
                    className="item"
                    data-img="/src/assets/images/content/showcase-1.rear.jpg"
                  >
                    <img
                      src="/src/assets/images/content/showcase-1.rear.jpg"
                      alt="rear"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <div className="px-2">
                  <div
                    className="item"
                    data-img="/src/assets/images/content/showcase-1.side.jpg"
                  >
                    <img
                      src="/src/assets/images/content/showcase-1.side.jpg"
                      alt="side"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <div className="px-2">
                  <div
                    className="item"
                    data-img="/src/assets/images/content/showcase-1.top.jpg"
                  >
                    <img
                      src="/src/assets/images/content/showcase-1.top.jpg"
                      alt="top"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="preview">
                <div className="item rounded-lg h-full overflow-hidden">
                  <img
                    src="/src/assets/images/content/showcase-1.front.jpg"
                    alt="front"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 md:p-6">
            <h2 className="text-5xl font-semibold">Chair Thatty</h2>
            <p className="text-xl">IDR 12.000.000</p>

            <a
              href="cart.html"
              className="transition-all duration-200 bg-pink-400 text-black focus:bg-black focus:text-pink-400 rounded-full px-8 py-3 mt-4 inline-flex"
            >
              <svg
                className="fill-current mr-3"
                width="26"
                height="24"
                viewBox="0 0 26 24"
              >
                <path d="M10.8754 18.7312C9.61762 18.7312 8.59436 19.7115 8.59436 20.9164C8.59436 22.1214 9.61762 23.1017 10.8754 23.1017C12.1331 23.1017 13.1564 22.1214 13.1564 20.9164C13.1563 19.7115 12.1331 18.7312 10.8754 18.7312ZM10.8754 21.8814C10.3199 21.8814 9.86796 21.4485 9.86796 20.9163C9.86796 20.3842 10.3199 19.9512 10.8754 19.9512C11.4308 19.9512 11.8828 20.3842 11.8828 20.9163C11.8828 21.4486 11.4308 21.8814 10.8754 21.8814Z" />
                <path d="M18.8764 18.7312C17.6186 18.7312 16.5953 19.7115 16.5953 20.9164C16.5953 22.1214 17.6186 23.1017 18.8764 23.1017C20.1342 23.1017 21.1575 22.1214 21.1575 20.9164C21.1574 19.7115 20.1341 18.7312 18.8764 18.7312ZM18.8764 21.8814C18.3209 21.8814 17.869 21.4485 17.869 20.9163C17.869 20.3842 18.3209 19.9512 18.8764 19.9512C19.4319 19.9512 19.8838 20.3842 19.8838 20.9163C19.8838 21.4486 19.4319 21.8814 18.8764 21.8814Z" />
                <path d="M19.438 7.2262H10.3122C9.96051 7.2262 9.67542 7.49932 9.67542 7.83626C9.67542 8.1732 9.96056 8.44632 10.3122 8.44632H19.438C19.7897 8.44632 20.0748 8.1732 20.0748 7.83626C20.0748 7.49927 19.7897 7.2262 19.438 7.2262Z" />
                <path d="M18.9414 10.3942H10.8089C10.4572 10.3942 10.1721 10.6673 10.1721 11.0042C10.1721 11.3412 10.4572 11.6143 10.8089 11.6143H18.9413C19.293 11.6143 19.5781 11.3412 19.5781 11.0042C19.5781 10.6673 19.293 10.3942 18.9414 10.3942Z" />
                <path d="M25.6499 4.508C25.407 4.22245 25.0472 4.05871 24.6626 4.05871H4.82655L4.42595 2.19571C4.34232 1.80709 4.06563 1.48078 3.68565 1.32272L0.890528 0.160438C0.567841 0.0261566 0.192825 0.168008 0.0528584 0.477043C-0.0872597 0.786176 0.0608116 1.14549 0.383347 1.27957L3.17852 2.4419L6.2598 16.7708C6.38117 17.3351 6.90578 17.7446 7.50723 17.7446H22.7635C23.1152 17.7446 23.4003 17.4715 23.4003 17.1346C23.4003 16.7976 23.1152 16.5245 22.7635 16.5245H7.50728L7.13247 14.7815H22.8814C23.4828 14.7815 24.0075 14.3719 24.1288 13.8076L25.9101 5.52488C25.9876 5.16421 25.8928 4.79349 25.6499 4.508ZM22.8814 13.5615H6.87012L5.08895 5.27879L24.6626 5.27884L22.8814 13.5615Z" />
              </svg>
              Add to Cart
            </a>
            <hr className="my-8" />

            <h6 className="text-xl font-semibold mb-4">About the product</h6>
            <p className="text-xl leading-7 mb-6">
              Tailored to a level of perfection synonymous with that of a Savile
              Row suit and with understated quality in the detail, Jetty has
              been influenced by timeless 1950s style.
            </p>
            <p className="text-xl leading-7">
              Providing a subtle nod to the past, Jetty also provides a perfect
              solution for the way we work today. A comprehensive product
              family, Jetty features a variety of elegant chairs and sofas.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 px-4 py-16">
        <div className="container mx-auto">
          <div className="flex flex-start mb-4">
            <h3 className="text-2xl capitalize font-semibold">
              Complete your room <br className="" />
              with what we designed
            </h3>
          </div>
          <div className="flex overflow-x-auto mb-4 -mx-3">
            <div className="px-3 flex-none" style={{ width: "320px" }}>
              <div className="rounded-xl p-4 pb-8 relative bg-white">
                <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                  <img
                    src="/src/assets/images/content/chair-1.png"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h5 className="text-lg font-semibold mt-4">Cangkir Mauttie</h5>
                <span className="">IDR 89.300.000</span>
                <a href="details.html" className="stretched-link">
                  {/* <!-- fake children --> */}
                </a>
              </div>
            </div>
            <div className="px-3 flex-none" style={{ width: "320px" }}>
              <div className="rounded-xl p-4 pb-8 relative bg-white">
                <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                  <img
                    src="/src/assets/images/content/chair-2.png"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h5 className="text-lg font-semibold mt-4">Saman Kakka</h5>
                <span className="">IDR 14.500.399</span>
                <a href="details.html" className="stretched-link">
                  {/* <!-- fake children --> */}
                </a>
              </div>
            </div>
            <div className="px-3 flex-none" style={{ width: "320px" }}>
              <div className="rounded-xl p-4 pb-8 relative bg-white">
                <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                  <img
                    src="/src/assets/images/content/chair-3.png"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h5 className="text-lg font-semibold mt-4">Lino Dino</h5>
                <span className="">IDR 22.000.000</span>
                <a href="details.html" className="stretched-link">
                  {/* <!-- fake children --> */}
                </a>
              </div>
            </div>
            <div className="px-3 flex-none" style={{ width: "320px" }}>
              <div className="rounded-xl p-4 pb-8 relative bg-white">
                <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                  <img
                    src="/src/assets/images/content/chair-1.png"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h5 className="text-lg font-semibold mt-4">Syail Ammeno</h5>
                <span className="">IDR 6.399.999</span>
                <a href="details.html" className="stretched-link">
                  {/* <!-- fake children --> */}
                </a>
              </div>
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
