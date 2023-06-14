import Link from "next/link";
import {
  BsFillPersonFill,
  BsFillSuitHeartFill,
  BsFillBagFill,
} from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between px-24 py-7">
        <div className="items-center justify-center flex-1">
          <input
            type="text"
            placeholder="Search products"
            className="px-2 text-center border-b"
            autoFocus={false}
          />
        </div>
        <div className="flex items-center justify-center flex-1">
          <Link href="/" className="text-3xl font-light">
            Jam || Shop
          </Link>
        </div>
        <div className="flex items-center justify-end flex-1 gap-5">
          <div className="flex items-center gap-2">
            <span className="text-lg">Sign In</span>
            <BsFillPersonFill />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">Favorites</span>
            <BsFillSuitHeartFill />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">Cart</span>
            <BsFillBagFill />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
