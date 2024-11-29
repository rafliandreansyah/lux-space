import LivingRoomImg from "../../assets/images/content/image-catalog-1.png";
import ChildrenRoomImg from "../../assets/images/content/image-catalog-2.png";
import DecorationRoomImg from "../../assets/images/content/image-catalog-3.png";
import LivingRoom2Img from "../../assets/images/content/image-catalog-4.png";
import BackgroundImage from "./BackgroundImage";
import TitleText from "./TitleText";

export default function BrowseTheRoom() {
  return (
    <div className="bg-gray-100">
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-semibold pt-10">
          Browse The Room <br /> That We Designed For You
        </h2>
        <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-9 gap-6 mt-8">
          <div className="relative rounded-lg col-span-1 row-span-1 md:col-span-4 min-h-44 overflow-hidden shadow-sm hover:shadow-lg">
            <BackgroundImage background={LivingRoomImg} />
            <div className="absolute size-full flex flex-col justify-center">
              <div className="flex flex-col z-10 text-black w-2/5 self-end">
                <TitleText title="Living Room" items="18,309 items" />
              </div>
            </div>
          </div>
          <div className="relative rounded-lg min-h-44 col-span-1 row-span-1 md:col-span-2 md:row-span-2 overflow-hidden shadow-sm hover:shadow-lg">
            <BackgroundImage background={DecorationRoomImg} />
            <div className="absolute size-full flex flex-col justify-center md:justify-start md:mt-6 md:text-center">
              <div className="flex flex-col z-10 text-black w-2/5 md:w-full self-end  md:self-center">
                <TitleText title="Decoration" items="77,392 items" />
              </div>
            </div>
          </div>
          <div className="relative rounded-lg min-h-44 col-span-1 row-span-1 md:col-span-3 md:row-span-2 overflow-hidden shadow-sm hover:shadow-lg">
            <BackgroundImage background={LivingRoom2Img} />
            <div className="absolute size-full flex flex-col justify-center md:justify-start md:mt-6 md:text-center">
              <div className="flex flex-col z-10 text-black w-2/5 md:w-full self-end md:self-center">
                <TitleText title="Bed Room" items="22,094 items" />
              </div>
            </div>
          </div>
          <div className="relative rounded-lg min-h-44 md:col-span-4 overflow-hidden shadow-sm hover:shadow-lg">
            <BackgroundImage background={ChildrenRoomImg} />
            <div className="absolute size-full flex flex-col justify-center">
              <div className="flex flex-col z-10 text-black w-2/5 self-end">
                <TitleText title="Children Room" items="837 items" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
