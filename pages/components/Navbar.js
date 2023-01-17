import Link from 'next/link';

const NavBar = () => {
  const navItems = [
    {
      title: 'Characters',
      href: '/characters',
    },
  ];
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Le Wagon Tokyo 🇯🇵
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((navItem, idx) => (
            <li key={idx}>
              <Link href={navItem.href}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
