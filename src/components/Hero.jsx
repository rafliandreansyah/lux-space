import HeroImages from "../assets/images/content/image-section-1.png";

export default function Hero() {
  return (
    <section className="flex flex-row">
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
        <div className="relative flex">
          <div className="absolute bg-black opacity-30 w-full h-full z-10"></div>
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
  );
}
