import Image from "next/image";
import navLogo from "../public/homeAssets/jobiLogoBlackFont.png";

export default function Nav() {
  return (
    <>
      <nav className="navContainer wrapper">
        <a href="/" className="navLogo">
          <Image src={navLogo} alt="jobi logo" />
        </a>
        <div className="findNav">
          <a href="/jobs">Find Jobs</a>
          <a href="/plans">Find Talents</a>
          <a href="/" className="explore">
            Explore
          </a>
          <div className="exploreArrow"></div>
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
