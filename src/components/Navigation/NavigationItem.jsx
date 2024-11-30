export default function NavigationItem({ title }) {
  return (
    <li className="mx-5 text-black hover:underline underline-offset-4">
      <a href="#">{title}</a>
    </li>
  );
}
