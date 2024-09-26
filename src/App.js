import { useMemo, useState } from "react";
import Card from "./components/Card";
import ImageCard from "./components/Image-card";

import "./App.css";

import Modal from "react-modal";

function App() {
  const [modalIsOpen, setModalOpen] = useState(false);
  // const modalIsOpen = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const openModal = () => {
    console.log("openModal");
    setModalOpen(true)};
  

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
      title: "Hello",
      description: "test",
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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstIndex, setfirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(12);
  const [sliderdataview, setsliderdataview] = useState(sliderData.slice(0, 10));
  useMemo(() => {
    setsliderdataview(sliderData.slice(firstIndex, lastIndex));
  }, [firstIndex, lastIndex]);

  const goToPrevious = () => {
    setfirstIndex(firstIndex - 3 > 0 ? firstIndex - 3 : firstIndex);
    setLastIndex(firstIndex - 3 > 0 ? lastIndex - 3 : lastIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setfirstIndex(
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

          {sliderdataview.map((slider) => (
            <Card text={slider.title} image={slider.image} />
          ))}
          <button onClick={goToNext}>
            <img src="/slider/svgviewer-output (2).png" alt="Next" />
          </button>
        </div>
        <div className="images-list" id="popup" >
          {imagesList.map((item) => (
            <ImageCard
              key={item.title} // Ensure each item has a unique key
              image1={item.image}
              image2={item.icon}
              text={item.title}
              handleOnClick={openModal}
              paragraph={item.description}
            />
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>

      </Modal>
    </>
  );
}

export default App;
