import logo from "../assets/gopi_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img className="mx-2 w-15" src={logo} alt="logo" width={120} height={120}/>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2x">

      <a href="https://www.linkedin.com/in/gopi3112/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/GopiM3112" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
        
        
        <a href="https://x.com/GopiM91379925" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter/>
        </a>
       
      </div>
    </nav>
  );
};

export default Navbar;
