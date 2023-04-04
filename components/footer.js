import Image from "next/image";
import jobiFooter from "../public/homeAssets/jobiLogoBlackFont.png";
import facebookFooter from "../public/homeAssets/facebookIconFooter.png"
import instaFooter from "../public/homeAssets/instaIconFooter.png";
import pinterestFooter from "../public/homeAssets/pinterestIconFooter.png";

export default function Footer() {
  return (
    <>
      <main>
        <section className="footer">
          <div className="footingHeader wrapper">
            <div className="footingHeaderLeft">
              <h3>Most complete job portal.</h3>
              <p>Sign up and start finding your job or talents</p>
            </div>
            <div className="footingHeaderRight">
              <button className="footerButt1">Looking for a job?</button>
              <button className="footerButt2">Post a job</button>
            </div>
          </div>
          <div className="footerBottom wrapper">
            <div className="jobiFooter">
              <Image src={jobiFooter} />
            </div>
            <div className="foot">
              <h4>Products</h4>
              <p>Take the tour</p>
              <p>Live chat</p>
              <p>Self-service</p>
              <p>Mobile</p>
              <p>Collaboration</p>
              <p>Reviews</p>
            </div>
            <div className="foot">
              <h4>Links</h4>
              <p>Pricing</p>
              <p>About us</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>
            <div className="foot">
              <h4>Legal</h4>
              <p>Terms of use</p>
              <p>Terms & conditions</p>
              <p>Privacy</p>
              <p>Cookie policy</p>
            </div>
            <div className="newsletter">
              <h4>Newsletter</h4>
              <p>Join & get important news regularly</p>
              <div className="enterEmail">
                <p>Enter your email</p>
              </div>
              <button>send</button>
              <p className="relevant">we only send relevant emails</p>
            </div>
          </div>
        </section>
        <div className="footerForReal wrapper">
          <div className="privacyAndTerms">
            <p>Privacy & Terms</p>
            <p>Contact Us</p>
          </div>
          <div className="copyright">
            <p>copyright &copy; 2022 jobi inc.</p>
          </div>
          <div className="footerIcons">
            <div>
              <Image src={facebookFooter} />
            </div>
            <div>
              <Image src={instaFooter} />
            </div>
            <div>
              <Image src={pinterestFooter} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
