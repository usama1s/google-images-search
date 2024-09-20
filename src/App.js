import logo from "./logo.svg";
// import "./App.css";
import Sliderdata from "./components/slider";

function App() {
  const sliderData = [
    {
      image: "./slider/image1.jpg",
      title: "Hello",
    },
    {
      image: "./slider/image2.jpg",
      title: "Hello",
    },
    {
      image: "./slider/image3.jpg",
      title: "Hello",
    },
    {
      image: "./slider/image4.jpg",
      title: "Hello",
    },
  ];
  return <Sliderdata data={sliderData} />;
}

export default App;
