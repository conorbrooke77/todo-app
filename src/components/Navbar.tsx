export default function Navbar() {
  return (
    <nav className="flex flex-col items-center justify-center text-2xl font-bold">
      <ul className="flex space-x-15">
        <li>
          <a href="#" className="text-white hover:text-blue-500">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
