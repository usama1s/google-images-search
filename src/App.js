import { useMemo, useState } from "react";
import Card from "./components/card";
import ImageCard from "./components/image-card";
import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popUpdata, setPopupData] = useState({
    title: "",
    image: "",
    icon: "",
    description: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(10);
  const [sliderDataView, setSliderDataView] = useState([]);

  const sliderData = [
    {
      image: "/slider/image1.jpg",
      title: "Hirewq",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hiaef",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi32",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hireqw",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi32",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hifdas",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hifda ",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hifdas",
    },
    {
      image: "/slider/image2.jpg",
      title: "test",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image2.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image2.jpg",
      title: "test",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image2.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image2.jpg",
      title: "test",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image2.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image2.jpg",
      title: "test",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image2.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hi",
    },
    {
      image: "/slider/image2.jpg",
      title: "test",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
    },
  ];

  const imagesList = [
    {
      image: "/slider/image1.jpg",
      title:
        "Tree Sunset Clouds - Free stock photo on Pixabay Free stock photo on Pixabay Free stock photo on Pixabay",
      url: "https://www.google.com/",
      url_title: "Pixabay",
      icon: "/slider/image1.jpg",
    },
    {
      image: "/slider/image2.jpg",
      title: "Hello Hi Hello Hi Hello Hi Hello Hi ",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image2.jpg",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image3.jpg",
    },
    {
      image: "/slider/image5.jpg",
      title: "Hello",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image4.jpg",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image1.jpg",
    },
    {
      image: "/slider/image5.jpg",
      title: "Hello Hi Hello Hi Hello Hi Hello Hi ",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image2.jpg",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image5.jpg",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image4.jpg",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image1.jpg",
    },
    {
      image: "/slider/image2.jpg",
      title: "Hello Hi Hello Hi Hello Hi Hello Hi ",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image5.jpg",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image3.jpg",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image5.jpg",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
      url: "https://www.google.com/",
      url_title: "test",
      icon: "/slider/image5.jpg",
    },
  ];

  useMemo(() => {
    setSliderDataView(sliderData.slice(firstIndex, lastIndex));
  }, [firstIndex, lastIndex]);
  // handleOnClick={() =>
  //   openPopup(item.title, item.image, item.icon, item.url_title, item.url)
  // }
  const openPopup = (title, image, icon, url_title, url) => {
    setPopupOpen(true);
    setPopupData({
      title,
      image,
      icon,
      url_title,
      url,
    });
  };
  const closePopup = () => {
    setPopupOpen(false);
  };

  // for scrolling
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust scroll amount
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust scroll amount
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;

      // Show left button if scrolled past the start
      setShowLeftButton(scrollLeft > 0);
      // Show right button if not scrolled to the end
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    };

    // Add event listener for scroll
    scrollContainerRef.current.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      scrollContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="main-body">
        <div className="card-container" ref={scrollContainerRef}>
          {showLeftButton && (
            <div className="slider-btns prev">
              <button onClick={scrollLeft}>
                <svg class="x5f7Bc" focusable="false" viewBox="0 0 48 48">
                  <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"></path>
                </svg>
              </button>
            </div>
          )}

          {sliderData.map((slider, i) => (
            <Card key={i} text={slider.title} image={slider.image} />
          ))}
          {showRightButton && (
            <div className="slider-btns next">
              <button onClick={scrollRight}>
                <svg
                  style={{ transform: "rotate(180deg)" }}
                  class="x5f7Bc"
                  focusable="false"
                  viewBox="0 0 48 48"
                >
                  <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="main-card">
          <div className="images-list" id="popup">
            {imagesList.map((item) => (
              <ImageCard
                key={item.title}
                image={item.image}
                icon={item.icon}
                text={item.title}
                url_title={item.url_title}
                url={item.url}
                handleOnClick={() =>
                  openPopup(
                    item.title,
                    item.image,
                    item.icon,
                    item.url_title,
                    item.url
                  )
                }
              />
            ))}
          </div>
          {isPopupOpen && (
            <>
              <div className="images_popup">
                <div className="title">
                  <a href="">
                    <div className="icon">
                      <img src={popUpdata.icon} alt="Popup Image" />
                    </div>
                    <p>{popUpdata.url_title}</p>
                  </a>

                  <div className="slider-btnss">
                    <button className="prev">
                      <svg
                        style={{ transform: "rotate(180deg)" }}
                        class="t0PEec"
                        viewBox="0 0 24 24"
                        focusable="false"
                        height="28"
                        width="28"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
                      </svg>
                    </button>
                    <button className="next">
                      <svg
                        class="t0PEec"
                        viewBox="0 0 24 24"
                        focusable="false"
                        height="28"
                        width="28"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
                      </svg>
                    </button>
                  </div>
                  <button className="more-options">
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      height="24"
                      width="24"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                  </button>
                  <button className="close-btn" onClick={closePopup}>
                    <img src="/slider/close-svgrepo-com.svg" alt="Close" />
                  </button>
                </div>
                <div className="content">
                  <div className="img">
                    <img src={popUpdata.image} alt="Popup Image" />
                  </div>
                  <div className="links">
                    <a href={popUpdata.url}>{popUpdata.title}</a>
                    <a href={popUpdata.url}>
                      Visit{" "}
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        height="18"
                        width="18"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="actions">
                  <button>
                    <svg
                      class="WjVzzd"
                      viewBox="0 0 24 24"
                      focusable="false"
                      height="18"
                      width="18"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M18 16c-.79 0-1.5.31-2.03.81L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.53.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.48.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.05 4.12c-.05.22-.09.45-.09.69 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3zm0-12c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                    </svg>
                    Share
                  </button>
                  <button>
                    <svg
                      class="WjVzzd"
                      viewBox="0 0 24 24"
                      focusable="false"
                      height="18"
                      width="18"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path>
                    </svg>
                    Save
                  </button>
                </div>
                <div className="images-list" id="popup">
                  {imagesList.map((item) => (
                    <ImageCard
                      key={item.title}
                      image={item.image}
                      icon={item.icon}
                      text={item.title}
                      url_title={item.url_title}
                      url={item.url}
                      handleOnClick={() =>
                        openPopup(
                          item.title,
                          item.image,
                          item.icon,
                          item.url_title,
                          item.url
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
