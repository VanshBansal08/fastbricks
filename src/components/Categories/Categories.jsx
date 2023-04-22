import React , {useState} from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import './Categories.css'
const Categories = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
      setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="categories">

          <div className="col-d" style={{transform:`translateX(-${currentSlide * 10}vw)`}}>
            <div className="icons-arrow">
          <div className="icon-west" onClick={prevSlide}>
              <WestOutlinedIcon />
            </div>
            <div className="icon-east" onClick={nextSlide}>
              <EastOutlinedIcon />
            </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            <div className="col-b">
                <div className="col-c"></div>
                <div className="text">
                    <p>My Place</p>
                </div>
            </div>
            
          
            
          </div>
      
           
        
        </div>
      );
  
}

export default Categories