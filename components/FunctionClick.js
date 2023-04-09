import React from 'react'

function FunctionClick() {
  if (typeof window !== "undefined") {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    nextButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
    });

    prevButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    });
  }
  return (
    <>
      <section className="slider-wrapper">
        <button className="slide-arrow" id="slide-arrow-prev">
          <p className="buttP">&#60;</p>
        </button>
        <ul className="slides-container" id="slides-container">
          <li className="slide">
            "Very easy to set-up. I had no experience with <br /> hosting before
            singing up with HostGator but they've <br /> made everything seem
            simple."
            <p className="rashed">
              &#9866; Georgio J. <span>Italy</span>
            </p>
          </li>
          <li className="slide">
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. Dolorum, <br />
            deserunt quo ipsa in debitis perferendis temporibus <br />
            nulla recusandae expedita totam!
            <p className="rashed">
              &#9866; Pavel F. <span>Israel</span>
            </p>
          </li>
          <li className="slide">
            Lorem ipsum dolor sit amet consectetur, <br />
            adipisicing elit. Repellat quibusdam veniam <br />
            voluptatum quos. <br /> Odio repellat optio et nam sunt quasi
            molestiae <br />
            labore fugit qui in commodi alias, nostrum ipsa <br />
            corporis minus nesciunt.
            <br />
            Consequatur deserunt repellat pariatur <br />
            dolore vero ducimus eos hic.
            <p className="rashed">
              &#9866; Ella A. <span>Canada</span>
            </p>
          </li>
          <li className="slide">
            Lorem, ipsum dolor sit amet consectetur <br />
            adipisicing elit. Numquam exercitationem ab velit <br />
            necessitatibus blanditiis sit aut harum dolor, <br />
            quas vero quo nobis cum, recusandae, cupiditate?
            <p className="rashed">
              &#9866; Moofka. <span>Turkey</span>
            </p>
          </li>
          <li className="slide">
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Quibusdam itaque doloribus <br />
            quas, reiciendis numquam consequatur <br />
            voluptas tenetur unde quia dolores, <br />
            corporis corrupti repellat nam <br />
            ducimus tempore, fugit assumenda eos!
            <p className="rashed">
              &#9866; Bublik. <span>USA</span>
            </p>
          </li>
        </ul>
        <button className="slide-arrow" id="slide-arrow-next">
          <p className="buttP">&#62;</p>
        </button>
      </section>
    </>
  );
}

export default FunctionClick