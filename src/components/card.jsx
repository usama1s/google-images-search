import React from "react";

function Card() {
  return (
    <>
      <div className="card max-h-[168px] max-w-[299px]">
        <div>
          <a href="">
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <img src="./slider/image1.jpg" alt="" />
            </div>
          </a>
        </div>
        <div className="card-footer-text">
          <a href="">
            {" "}
            <div className="footer-logo-text flex flex-row justify-start items-center gap-2">
              <img
                className="max-h-[12px]"
                src="./uk-flag.png"
                width={12}
                alt=""
              />{" "}
              <h4 className="text-[18px]  font-normal tracking-normal footer text-heading hover:underline ">
                tooo
              </h4>
            </div>
            <p className="text-[20px]  leading-8 tracking-normal hover:underline ">
              best 4k wallpaper
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
