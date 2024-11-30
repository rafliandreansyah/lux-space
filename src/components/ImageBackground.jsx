export default function ImageBackground({ background }) {
  return (
    <img
      className="absolute size-full object-cover object-center"
      src={background}
      alt="Living Room"
    />
  );
}
