import { useMemo, useState } from "react";
import Card from "./components/card";
import ImageCard from "./components/image-card";
import "./App.css";

const customStyles = {
  content: {
    position: "fixed",
    top: "15%",
    right: "2%",
    padding: "6px 16px",
    backgroundColor: "#1f1f1f",
    borderRadius: "10px",
    zIndex: 1000,
    overflowY: "auto",
    maxHeight: " calc(90vh - 50px)",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    zIndex: 999,
  },
};

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
      title: "Tree Sunset Clouds - Free stock photo on Pixabay",
      description: "Pixabay",
      icon: "/slider/image1.jpg",
    },
    {
      image: "/slider/image2.jpg",
      title: "Hello Hi Hello Hi Hello Hi Hello Hi ",
      description: "test",
      icon: "/slider/image2.jpg",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
      description: "test",
      icon: "/slider/image3.jpg",
    },
    {
      image: "/slider/image5.jpg",
      title: "Hello",
      description: "test",
      icon: "/slider/image4.jpg",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
      description: "test",
      icon: "/slider/image1.jpg",
    },
    {
      image: "/slider/image5.jpg",
      title: "Hello Hi Hello Hi Hello Hi Hello Hi ",
      description: "test",
      icon: "/slider/image2.jpg",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
      description: "test",
      icon: "/slider/image5.jpg",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
      description: "test",
      icon: "/slider/image4.jpg",
    },
    {
      image: "/slider/image1.jpg",
      title: "Hello",
      description: "test",
      icon: "/slider/image1.jpg",
    },
    {
      image: "/slider/image2.jpg",
      title: "Hello Hi Hello Hi Hello Hi Hello Hi ",
      description: "test",
      icon: "/slider/image5.jpg",
    },
    {
      image: "/slider/image3.jpg",
      title: "Hello",
      description: "test",
      icon: "/slider/image3.jpg",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
      description: "test",
      icon: "/slider/image5.jpg",
    },
    {
      image: "/slider/image4.jpg",
      title: "Hello",
      description: "test",
      icon: "/slider/image5.jpg",
    },
  ];

  useMemo(() => {
    setSliderDataView(sliderData.slice(firstIndex, lastIndex));
  }, [firstIndex, lastIndex]);

  const openPopup = (title, image, icon, description) => {
    setPopupOpen(true);
    console.log(title);
    setPopupData({
      title,
      image,
      icon,
      description,
    });
  };
  const closePopup = () => {
    setPopupOpen(false);
  };

  const goToPrevious = () => {
    setFirstIndex(firstIndex - 3 > 0 ? firstIndex - 3 : firstIndex);
    setLastIndex(firstIndex - 3 > 0 ? lastIndex - 3 : lastIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setFirstIndex(
      lastIndex + 3 < sliderData.length ? firstIndex + 3 : firstIndex
    );
    setLastIndex(lastIndex + 3 < sliderData.length ? lastIndex + 3 : lastIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="main-card">
        <div className="card-container">
          <button onClick={goToPrevious}>
            <img src="/slider/svgviewer-output (1).png" alt="Previous" />
          </button>
          {sliderDataView.map((slider, i) => (
            <Card key={i} text={slider.title} image={slider.image} />
          ))}
          <button onClick={goToNext}>
            <img src="/slider/svgviewer-output (2).png" alt="Next" />
          </button>
        </div>
        <div className="images-list" id="popup">
          {imagesList.map((item) => (
            <ImageCard
              key={item.title}
              image1={item.image}
              image2={item.icon}
              text={item.title}
              handleOnClick={() =>
                openPopup(item.title, item.image, item.icon, item.description)
              }
              paragraph={item.description}
            />
          ))}
        </div>
      </div>
      <div>
        {isPopupOpen && (
          <>
            <div style={customStyles.content}>
              <div className="maincard">
                <div className="modelcard">
                  <div className="modelbox">
                    <div className="modelimage">
                      <img src={popUpdata.image} alt="Popup Image" />
                    </div>
                    <div className="modeltextbox">
                      <h2>{popUpdata.description}</h2>
                    </div>
                    <div className="arrowbox">
                      <img
                        src="/slider/arrow-left-svgrepo-com.svg"
                        alt="Left Arrow"
                      />
                      <img
                        src="/slider/arrow-left-svgrepo-com (1).svg"
                        alt="Left Arrow"
                      />
                    </div>
                    <div className="optionbox">
                      <img
                        src="/slider/options-vertical-svgrepo-com.svg"
                        alt="Options"
                      />
                    </div>
                  </div>
                  {/* Close button */}
                  <button onClick={closePopup}>
                    <img src="/slider/close-svgrepo-com.svg" alt="Close" />
                  </button>
                </div>
                <div className="maincardimage">
                  <div className="imagecard">
                    <img src={popUpdata.image} alt="Main Image" />
                  </div>
                </div>
                <div className="vistbox">
                  <div className="dispersion">
                    <p>{popUpdata.title}</p>
                  </div>
                  <div className="vistbutton">
                    <button>
                      Visit
                      <span className="arrow-right">
                        <img
                          src="/slider/right-arrow-svgrepo-com.svg"
                          alt="Arrow"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="button-section">
                  <div className="share-button">
                    <button>
                      <span className="share-img">
                        <img src="slider/share-svgrepo-com.svg" alt="Share" />
                      </span>
                      Share
                    </button>
                  </div>
                  <div className="save-button">
                    <button>
                      <span className="save-image">
                        <img src="slider/save-svgrepo-com.svg" alt="Save" />
                      </span>
                      Save
                    </button>
                  </div>
                </div>
                <div className="googlecard">
                  <div className="googleimg">
                    <img src="slider/image3.jpg" alt="Google Image" />
                  </div>
                  <div className="goolgebox">
                    <div className="google-icon">
                      <img src="slider/uk-flag.png" alt="UK Flag" />
                    </div>
                    <div className="google-texticon">
                      <h1>hello</h1>
                    </div>
                  </div>
                  <div className="google-description">
                    <p>hello hey there</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
