export default function BackgroundImage({ background }) {
  return (
    <img
      className="absolute size-full object-cover"
      src={background}
      alt="Living Room"
    />
  );
}
