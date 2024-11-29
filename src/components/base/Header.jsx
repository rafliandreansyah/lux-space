import LogoLuxSpace from "../../assets/images/content/logo.png";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="absolute w-full z-50">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-row">
          <div className="flex-initial min-w-18">
            <img
              src={LogoLuxSpace}
              alt="Logo Lux Space"
              className="bg-contain"
            />
          </div>
          <div className="flex flex-row flex-1 justify-between">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
