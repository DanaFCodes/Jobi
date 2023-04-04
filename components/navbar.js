import Link from "next/link";
import Image from "next/image";
import navLogo from "../public/homeAssets/jobiLogoBlackFont.png";
import MyDropdown from "./MyDropdown";


export default function Nav() {
  return (
    <>
      <nav className="navContainer wrapper">
        <div className="navLogo">
          <Image src={navLogo} alt="jobi logo" />
        </div>
        <div className="findNav">
          <p>Find Jobs</p>
          <p>Find Talents</p>
          <p className="explore">Explore</p>
            <div className="exploreArrow">
              <MyDropdown />
            </div>
        </div>
        <div className="navLogin">
          <button className="navButt1">Login</button>
          <button className="navButt2">Register</button>
        </div>
      </nav>
      <div className="hLine"></div>

      <div className="secondaryNavContainer wrapper">
        <ul className="secondaryNav">
          <li>Design & Creative</li>
          <li>IT & Development</li>
          <li>Web & Mobile Dev</li>
          <li>Sales & Marketing</li>
          <li>Music & Audio</li>
          <li>Video & Animation</li>
        </ul>
      </div>
    </>
  );
}
