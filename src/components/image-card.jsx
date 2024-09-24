import React from "react";



function ImageCard({image1, image2, text, paragraph}) {
  return (
    <>
      <div className="card max-h-[168px] max-w-[299px] " >
        <div>
          <a href="">
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <img src={image1} alt="" />
            </div>
          </a>
        </div>
        <div className="card-footer-text">
          <a href="">
            {" "}
            <div className="footer-logo-text flex flex-row justify-start items-center gap-2">
              <img
                className="max-h-[12px]"
                src={image2}
                width={12}
                alt=""
              />{" "}
              <h4 className="text-[18px]  font-normal tracking-normal footer text-heading hover:underline  text-gray-100 " >
                {text}
              </h4>
            </div>
            <p className="text-[20px] leading-8 tracking-normal hover:underline text-gray-100">
              {paragraph}
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
