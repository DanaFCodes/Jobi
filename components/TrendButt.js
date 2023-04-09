import React from 'react'
import Image from 'next/image';
import wordPress from "../public/homeAssets/wordpressDeveloper.jpg";
import audioVideo from "../public/homeAssets/audioVideoEditing.jpg";
import proDesign from "../public/homeAssets/productDesign2.jpg";
import admin from "../public/homeAssets/adminCustomerSupport.jpg";

function TrendButt() {
    if (typeof window !== "undefined") {
        const trendsCont =
            document.getElementById('imgCont');
        const prev = document.getElementById("prevTrend");
        const next = document.getElementById("nextTrend");

    next.addEventListener("click", () => {
      trendsCont.scrollLeft += 50;
    });

    prev.addEventListener("click", () => {
      trendsCont.scrollLeft -= 50;
    });

    }

    return (
      <>
        <section className="trendingServices wrapper">
          <div className="trendy">
            <h2>Trending Services</h2>
            <div className="trendyButtons">
              <button id="prevTrend" className="trendArrow">
                &#60;
              </button>

              <button className="trendArrow" id="nextTrend">
                &#62;
              </button>
            </div>
          </div>
          <ul className="trendingContainer" id="imgCont">
            <li className="carousel" id="imgList">
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
            </li>
            <li className="carousel" id="imgList">
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
            </li>
            <li className="carousel" id="imgList">
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
            </li>
            <li className="carousel" id="imgList">
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
            </li>
          </ul>
        </section>
      </>
    );
}

export default TrendButt