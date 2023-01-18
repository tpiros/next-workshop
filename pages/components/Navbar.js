import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { CldImage } from 'next-cloudinary';

const NavBar = () => {
  const { user, error, isLoading } = useUser();
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
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <CldImage
                  width="250"
                  height="250"
                  crop="thumb"
                  gravity="faces"
                  src={
                    user['profile/user_metadata'].user_metadata.profile_photo
                  }
                  alt="User"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52"
            >
              <li>
                <Link href="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/api/auth/logout">Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/api/auth/login" className="btn btn-secondary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
