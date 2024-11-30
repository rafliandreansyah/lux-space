export default function SideMenuGroupItem({ label, children }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h5 className="font-semibold text-xl">{label}</h5>
        <div className="flex flex-col gap-[10px]">{children}</div>
      </div>
    </>
  );
}
