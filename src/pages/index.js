import Image from "next/image";
import React, { useEffect } from "react";
import headerImg from "../../public/homeAssets/headerImg.jpg";
import Button from "../../components/button";
// import trendingButt from "../../components/trendingButt";
import trusted1 from "../../public/homeAssets/payoneerLogo.png";
import trusted2 from "../../public/homeAssets/googleLogo.png";
import trusted3 from "../../public/homeAssets/adobeLogo.png";
import wordPress from "../../public/homeAssets/wordpressDeveloper.jpg"
import audioVideo from "../../public/homeAssets/audioVideoEditing.jpg"
import proDesign from "../../public/homeAssets/productDesign2.jpg"
import admin from "../../public/homeAssets/adminCustomerSupport.jpg"
import uxIcon from "../../public/homeAssets/uxUiDesign.png"
import accounting from "../../public/homeAssets/accounting.png";
import editing from "../../public/homeAssets/editing.png";
import phone from "../../public/homeAssets/telemarketing.png";
import marketing from "../../public/homeAssets/marketing.png";
import dev from "../../public/homeAssets/development.png";
import magnify from "../../public/homeAssets/magnifyingGlass.png";
import antonio from "../../public/homeAssets/antonio.jpg";
import rashed from "../../public/homeAssets/rashed.jpg";
import zubayer from "../../public/homeAssets/zubayer.jpg";
import jannatul from "../../public/homeAssets/jannatul.jpg";
import arrowUp from "../../public/homeAssets/arrowUp.png";
import arrowDown from "../../public/homeAssets/arrowDown.png";
import businessSolutions from "../../public/homeAssets/businessSolutions.jpg";
import playBtn from "../../public/homeAssets/playButtonIcon.png"
import howItWorks from "../../public/homeAssets/howItWorks.jpg";
import quotes from "../../public/homeAssets/feedbackQuotes.png";
import client1 from "../../public/homeAssets/client1.jpg";
import client2 from "../../public/homeAssets/client2.jpg";
import client3 from "../../public/homeAssets/client3.jpg";
import client4 from "../../public/homeAssets/client4.jpg";
import client5 from "../../public/homeAssets/client5.jpg";
import collabLogo from "../../public/homeAssets/collaboratingLogo.png";
import windows from "../../public/homeAssets/windowsLogo.png";
import gmail from "../../public/homeAssets/gmailLogo.png";
import insta from "../../public/homeAssets/instaLogo.jpg";
import messenger from "../../public/homeAssets/messengerLogo.jpg";
import slack from "../../public/homeAssets/slackLogo.png";


export default function Home() {
  // JS functionality !!!SOS!!!
    //   useEffect(() => {
    //   scrolly();
    // }, []);

  return (
    <>
      <header className="headerFlexContainer wrapper">
        <div className="header">
          <h4>#1 Online Marketplace</h4>
          <h1>Find the talents for any job.</h1>
          <p>
            Unlock your potential with quality job & earn from world leading
            brands & co.
          </p>
          <Button text="Post a job" />

          <div className="trustedLogos">
            <p>Trusted by:</p>
            <div className="trustedLogosDiv">
              <div>
                <Image
                  className="payoneer"
                  src={trusted1}
                  alt="Payoneer logo"
                />
              </div>

              <div>
                <Image className="google" src={trusted2} alt="Google logo" />
              </div>
              <div>
                <Image className="Adobe" src={trusted3} alt="Adobe logo" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="headerImg"
            src={headerImg}
            alt="illustration of person working at computer"
            width={600}
            height={600}
          />
        </div>
      </header>
      <main>
        <section className="trendingServices wrapper">
          <div className="trendy">
            <h2>Trending Services</h2>
            <div className="trendyButts">
              <button
                class="scroll-arrow"
                id="scroll-left"
                // onClick="scrollLeft()"
              >
                &#60;
              </button>
              <button
                class="scroll-arrow"
                id="scroll-right"
                // onClick="scrollRight()"
              >
                &#62;
              </button>
            </div>
          </div>
          <div className="trendingContainer">
            <div className="carousel" id="imgList">
              <p>
                WordPress <br></br> Development.
              </p>
              <Image
                className="trendingImage"
                src={wordPress}
                alt="person typing on computer"
                height={250}
                width={300}
              />
            </div>
            <div className="carousel">
              <p>
                Audio & <br></br> Video Editing.
              </p>
              <Image
                className="trendingImage"
                src={audioVideo}
                alt="person looking at computer screen, wearing headphones"
                height={250}
                width={300}
              />
            </div>
            <div className="carousel">
              <p>
                Product & <br></br> Branding Design.
              </p>
              <Image
                className="trendingImage"
                src={proDesign}
                alt="person holding tablet pen and tablet with designs"
                height={250}
                width={300}
              />
            </div>
            <div className="carousel">
              <p>
                Admin & <br></br> Customer Support.
              </p>
              <Image
                className="trendingImage"
                src={admin}
                alt="four people around large desk with computers"
                height={250}
                width={300}
              />
            </div>
          </div>
        </section>

        <section className="marketplace wrapper">
          <div className="marketplaceTitle">
            <h3 className="explore">Explore the marketplace.</h3>
            <p className="exploreP">Explore all fields &#62;</p>
          </div>
          <div className="marketListContainer">
            <div className="marketList">
              <ul className="uxUi">
                <li>
                  <Image
                    src={uxIcon}
                    alt="pencil icon"
                    height={30}
                    width={30}
                  />
                </li>
                <li>UI/UX Design</li>
                <li>
                  <span>12k+ Jobs</span>
                </li>
              </ul>
            </div>
            <div className="marketList">
              <ul className="dev">
                <li>
                  <Image
                    src={dev}
                    alt="icon for web development"
                    height={30}
                    width={30}
                  />
                </li>
                <li>Development</li>
                <li>
                  <span>8k+ Jobs</span>
                </li>
              </ul>
            </div>
            <div className="marketList">
              <ul className="marketing">
                <li>
                  <Image
                    src={marketing}
                    alt="shopping bag icon"
                    height={30}
                    width={30}
                  />
                </li>
                <li>Marketing</li>
                <li>
                  <span>12k+ Jobs</span>
                </li>
              </ul>
            </div>
            <div className="marketList">
              <ul className="phone">
                <li>
                  <Image src={phone} alt="phone icon" height={30} width={30} />
                </li>
                <li>Telemarketing</li>
                <li>
                  <span>3k+ Jobs</span>
                </li>
              </ul>
            </div>
            <div className="marketList">
              <ul className="editing">
                <li>
                  <Image
                    src={editing}
                    alt="soundboard icon"
                    height={30}
                    width={30}
                  />
                </li>
                <li>Editing</li>
                <li>
                  <span>12k+ Jobs</span>
                </li>
              </ul>
            </div>
            <div className="marketList">
              <ul className="accounting">
                <li>
                  <Image
                    src={accounting}
                    alt="icon of building"
                    height={30}
                    width={30}
                  />
                </li>
                <li>Accounting</li>
                <li>
                  <span>17k+ Jobs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="whyChooseUsSec wrapper">
          <div className="whyChooseUs">
            <div className="whyLeft">
              <div className="whyCircle"></div>
              <div className="whySearch">
                <p> Designer, Brand, Logo Designer </p>
                <p className="x"> + </p>
                <div className="whySquare"></div>
                <div className="magnify">
                  <Image
                    src={magnify}
                    alt="magnifying glass icon"
                    height={50}
                    width={50}
                  />
                </div>
              </div>

              <div className="usersContainer">
                <div className="user">
                  <Image
                    className="antonio"
                    src={antonio}
                    alt="profile photo of Antonio"
                    width={40}
                    height={40}
                  />
                  <div className="userInfo">
                    <div className="topUl">
                      <p>Antonio Volaska</p>
                      <p className="hireMe">HIRE ME</p>
                    </div>
                    <div className="bottomUl">
                      <p>UI Designer</p>
                      <p>
                        From <span className="bold">California</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="user">
                  <Image
                    className="antonio"
                    src={rashed}
                    alt="profile photo of Rashed"
                    width={40}
                    height={40}
                  />
                  <div className="userInfo">
                    <div className="topUl">
                      <p>Rashed Ka</p>
                      <p className="hireMe">HIRE ME</p>
                    </div>
                    <div className="bottomUl">
                      <p>Motion Designer</p>
                      <p>
                        From <span className="bold">Bangladesh</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="user">
                  <Image
                    className="antonio"
                    src={zubayer}
                    alt="profile photo of Zubayer"
                    width={40}
                    height={40}
                  />
                  <div className="userInfo">
                    <div className="topUl">
                      <p>Zubayer Al Hasan</p>
                      <p className="hireMe">HIRE ME</p>
                    </div>
                    <div className="bottomUl">
                      <p>Developer</p>
                      <p>
                        From <span className="bold">Norway</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="user">
                  <Image
                    className="antonio"
                    src={jannatul}
                    alt="profile photo of Jannatul"
                    width={40}
                    height={40}
                  />
                  <div className="userInfo">
                    <div className="topUl">
                      <p>Jannatul Ferdaus</p>
                      <p className="hireMe">HIRE ME</p>
                    </div>
                    <div className="bottomUl">
                      <p>Youtuber</p>
                      <p>
                        From <span className="bold">Turkey</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="whyRight">
              <p className="whyThough">Why choose us?</p>
              <h2>World of talent at your fingertips</h2>
              <div className="seamlessSearch">
                <h4>Seamless Search</h4>
                <Image
                  src={arrowUp}
                  alt="arrow up symbol"
                  width={15}
                  height={10}
                />
              </div>
              <p>
                It only takes 5 minutes. Set-up is smooth an dsimple, with full
                customisable page design to reflect your brand.
              </p>
              <div className="hireTopTalents">
                <h4>Hire top talents</h4>
                <Image
                  src={arrowDown}
                  alt="arrow down symbol"
                  width={15}
                  height={10}
                />
              </div>
              <div className="protectedPayments">
                <h4>Protected payments, everytime</h4>
                <Image
                  src={arrowDown}
                  alt="arrow down symbol"
                  width={15}
                  height={10}
                />
              </div>
              <Button text={"Learn more"} />
            </div>
          </div>
        </section>

        <section className="businessSolutions wrapper">
          <div className="businessLeft">
            <p className="whyThough solutions">Business Solutions</p>
            <h3>
              Get quick <br></br> Solutions for your
              <span className="businessSpan"> business.</span>
            </h3>
            <p className="solutionsInfo">
              A full suite of hybrid workrforce management tools are yours to
              use, as well as access to our top 1% of talent.
            </p>
            <div className="businessStats">
              <p>30k+</p>
              <p className="threePercent">3%</p>
              <p className="threePercent mil">7mil</p>
            </div>
            <div className="businessWords">
              <p>Worldwide Client</p>
              <p>Top Talents</p>
              <p>Doller Payout</p>
            </div>
            <Button
              text={"Explore jobi businesses"}
              className="businessButton"
            />
          </div>
          <div className="businessImg">
            <Image
              className="busImg"
              src={businessSolutions}
              alt="person working behind coffee counter, smiling"
              height={750}
            />
          </div>
        </section>

        <section className="gettingStarted wrapper">
          <div className="gettingStartedSection ">
            <div className="gettingStartedLeft">
              <Image className="howItWorksImg" src={howItWorks} height={750} />
            </div>
            <div className="gettingStartedRight">
              <div className="greenC"></div>
              <Image className="playBtn" src={playBtn} />
              <h3>
                Let's get started <br /> It's <span>simple.</span>
              </h3>
              <p>
                Get access to our top 1% talent as well as a complete set of
                hybrid workforce management tools.
              </p>
            </div>
            <div className="gettingStartedBottom">
              <h3 className="bottomH">
                Let's get started <br /> It's <span>simple.</span>
              </h3>
              <div className="gettingStartedOne">
                <div className="greenCirc">
                  <p>1</p>
                </div>
                <p>
                  It takes 2 minutes to <br /> open an account.
                </p>
                <p className="gettingStartedAnchor">OPEN ACCOUNT</p>
              </div>
              <div className="gettingStartedTwo">
                <div className="greenCirc">
                  <p>2</p>
                </div>
                <p>
                  Find talents or search <br /> your desire work.
                </p>
                <p className="gettingStartedAnchor">APPLY OR HIRE</p>
              </div>
              <div className="gettingStartedThree">
                <div className="greenCirc">
                  <p>3</p>
                </div>
                <p>
                  Get work done quickly <br /> with jobi gateway.
                </p>
                <p className="gettingStartedAnchor">PAYMENT METHOD</p>
              </div>
            </div>
          </div>
        </section>

        <section className="whatClientsHaveToSay wrapper">
          <Image src={quotes} className="quotes" />
          <h3>
            Check what these clients <br /> have to say.
          </h3>
          <div className="clientInfo">
            <div className="greenClientCirc">
              <p>{"<"}</p>
            </div>
            <p>
              "Very easy to set-up. I had no experience with <br /> hosting
              before singing up with HostGator but they've <br /> made
              everything seem simple."
            </p>
            <div className="greenClientCirc">
              <p>{">"}</p>
            </div>
          </div>
          <p className="rashed">
            &#9866; Rashed ka. <span>Italy</span>
          </p>
          <div className="clients">
            <Image
              className="client"
              src={client1}
              alt="profile image of client 1"
              width={90}
              height={90}
            />
            <Image
              className="client"
              src={client2}
              alt="profile image of client 2"
              width={90}
              height={90}
            />
            <Image
              className="client"
              src={client3}
              alt="profile image of client 3"
              width={90}
              height={90}
            />
          
            <Image
              className="client"
              src={client4}
              alt="profile image of client 4"
              width={90}
              height={90}
            />
            <Image
              className="client client5"
              src={client5}
              alt="profile image of client 5"
              width={90}
              height={90}
            />
          </div>
        </section>

        <section className="collaboration wrapper">
          <div className="collaborationLeft">
            <h3>
              Collaboration <br /> with leading <br />
              Brands
            </h3>
            <p>
              We collaborate with a number of top tier companies <br />
              on imagining the future of work, have a look.
            </p>
            <Button text={"Learn more"} />
          </div>
          <div className="collaborationRight">
            <div className="ring1">
              <div className="collabC">
                <Image
                  src={windows}
                  className="windowsLogo"
                  alt="Windows logo"
                  height={40}
                  width={40}
                />
              </div>
              <div className="collabC collabC2">
                <Image
                  src={gmail}
                  className="gmailLogo"
                  alt="Gmail logo"
                  height={35}
                  width={40}
                />
              </div>
              <div className="collabC collabC3">
                <Image
                  src={insta}
                  className="instaLogo"
                  alt="Instagram logo"
                  height={40}
                  width={40}
                />
              </div>
              <div className="colabInfo">
                <p>
                  <span>100+</span>
                  <br />
                  Leading Brands
                </p>
              </div>
              <div className="collabC collabC4">
                <Image
                  src={slack}
                  className="slackLogo"
                  alt="Slack logo"
                  height={40}
                  width={40}
                />
              </div>
              <div className="collabC collabC5">
                <Image
                  src={messenger}
                  className="messengerLogo"
                  alt="Messenger logo"
                  height={40}
                  width={50}
                />
              </div>
            </div>
            <div className="ring2"></div>
            <div className="innerCirc">
              <Image src={collabLogo} className="collabLogo" />
            </div>
          </div>
        </section>

        <section className="trendingSkills wrapper">
          <div className="trendingSkills">
            <div className="trends">
              <h4>Trending Skills</h4>
              <p>Blockchain</p>
              <p>Node.js</p>
              <p>HR consulting</p>
              <p>Vue.js</p>
              <p>Microsoft Power BI</p>
              <p>React.js</p>
              <p>Videographers</p>
            </div>
            <div className="trends">
              <h4>Top Skills</h4>
              <p>Full Consultation</p>
              <p>Code Review</p>
              <p>Staff Augmentation</p>
              <p>Support</p>
              <p>Video Editors</p>
              <p>Data Entry Specialists</p>
              <p>Data Analyst</p>
            </div>
            <div className="trends">
              <h4>Top in USA</h4>
              <p>Technical Support</p>
              <p>Accountants</p>
              <p>Web Designers</p>
              <p>Customer Identity</p>
              <p>Data Entry</p>
            </div>
            <div className="trends">
              <h4>Project Catalog</h4>
              <p>Microsites</p>
              <p>Marketing Automation</p>
              <p>SEO & SMM</p>
              <p>Lead Generation</p>
              <p>Article Writing Services</p>
              <p>SEO Services</p>
              <p>Translation Services</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
