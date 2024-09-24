import Card from "./components/card";
import ImageCard from "./components/image-card";
import logo from "./logo.svg";
import image1 from "../src/slider/image1.jpg";
import ukflag from "../src/slider/uk-flag.png";
import svgleft from "../src/slider/svgviewer-output (1).png"
import svgright from "../src/slider/svgviewer-output (2).png"

import "./App.css";

function App() {
  const sliderData = [];
  return (
    <>
      <div className="main-card" >
        <div className="svg-left">
        <img  src={svgleft} />
        </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bbbbbbb" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
          <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>
       <div>
       <Card text="hello bro" image={image1} />
       </div>

       <div className="svgright">
       <img src={svgright} />  
        </div>
       
      </div>
      
      <ImageCard image1={image1} image2={ukflag}  text="hello bro" paragraph="4k best welpaper" />
    </>
  );
}

export default App;
