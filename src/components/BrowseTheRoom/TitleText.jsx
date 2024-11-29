export default function TitleText({ title, items }) {
  return (
    <>
      <h5 className="text-xl font-semibold">{title}</h5>
      <p className="text-xs">{items}</p>
    </>
  );
}
