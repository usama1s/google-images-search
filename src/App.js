import Card from "./components/card";
import ImageCard from "./components/image-card";

import "./App.css";

function App() {
  const sliderData = [
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
  console.log(imagesList);

  return (
    <>
      <div className="main-card">
        <div className="card-container">
          <button>Left</button>
          {sliderData.map((item) => (
            <Card text={item.title} image={item.image} />
          ))}
          <button>Right</button>
        </div>
        <div className="images-list">
          {imagesList.map((item) => (
            <ImageCard
              image1={item.image}
              image2={item.icon}
              text={item.title}
              paragraph={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
