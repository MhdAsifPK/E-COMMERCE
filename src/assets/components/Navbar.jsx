import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import SearchBar from "./SearchBar";
import { MdLogout } from "react-icons/md";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      {/* All Product */}
      <li>
        <Link to={"/allproduct"}>All Product</Link> 
      </li>

      {/* Signup */}
      <li>
        <Link to={"/signup"}>Signup</Link>
      </li>

      {/* User */}
      {/* <li>
                <Link to={'/user-dashboard'}>user</Link>
            </li> */}

      {/* Admin */}
      {/* <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li> */}

      {/* logout */}
      {/* <li>logout</li> */}

      {/* Cart */}
      <li></li>
    </ul>
  );
  return (
    <nav className="bg-blue-600 sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center">
              E-Commerce
            </h2>
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

        {/* Search Bar  */}
        <SearchBar />
        <div className="flex justify-center space-x-8 ">
          <Link to={"/cart"}>
          <div className="flex items-center">
    <FaCartArrowDown className="text-blue-500 text-2xl mr-2" />
    <span className="text-lg">(0)</span>
</div>
          </Link>
          <div className="flex items-center space-x-2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 cursor-pointer">
            <MdLogout className="text-xl" />
            <span className="font-semibold" onClick={()=>{
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
            }}>Log Out</span>
          </div>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
