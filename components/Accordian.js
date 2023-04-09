import React from 'react'

function Accordian(props) {
    function accoridanButt() {
      const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
      if (typeof window !== "undefined") {
        accordionItemHeaders.forEach(accordionItemHeader => {
          const accordionItemBody = accordionItemHeader.nextElementSibling;
          accordionItemHeader.addEventListener("click", event => {
            accordionItemHeader.classList.toggle("active");
            if (accordionItemHeader.classList.contains("active")) {
              accordionItemBody.style.display = "inline";
            }
            else {
              accordionItemBody.style.display = "none";
            }

          });
        })
        console.log("word")
      }
}

    return (
      <>
        <div className="accordion-item-header" onClick={accoridanButt}>
          <h4>{props.text}</h4>

        </div>
      </>
    );
    }


export default Accordian