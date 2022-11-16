
import { Component } from "react";
import leftImage from "../images/left-image.jpg"
import rightImage from "../images/right-image.jpg"

class About extends Component{



    render(){

 
        return(
            <div className="col-md-8 about-section" style={{marginTop:"5em"}}>
            <div className="col-sm-12"id="about"  >
            <h1  data-aos="fade-up">About Me</h1>
            <div className="line"  data-aos="fade-up"></div>
            <p  data-aos="fade-up">This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this layout for your site. Updated on 21 May 2019 for repeated<br></br> main menu HTML code.</p>
         
         </div>
         <div className="row" style={{marginTop:"5em"}}>
         <div className="col-lg-6 left-side" >
            <img src={leftImage} className="img-fluid"  data-aos="fade-right"/>
            </div>
            <div className="col-lg-6 right-side"   data-aos="fade-left">
                <div>
            <h3> Reflux HTML CSS Template</h3>
            <p>Donec tristique feugiat lacus, at sollicitudin nunc euismod sed. Mauris viverra, erat non sagittis gravida, elit dui mollis ante, sit amet eleifend purus ligula eget eros. Sed tincidunt quam vitae neque pharetra dignissim eget ut libero.</p>
           <button>Read More</button>
           </div>
            </div>
            </div>
            <hr style={{color:"white"}}  data-aos="fade-up"></hr>

            <div className="row" style={{marginTop:"5em"}}>
       
            <div className="col-lg-6 right-side"  data-aos="fade-right">
                <div>
            <h3> Sed sagittis rhoncus velit</h3>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum fermentum eleifend nibh, vitae sodales elit finibus pretium. Suspendisse potenti. Ut sollicitudin risus a sollicitudin semper.</p>
           <button>Read More</button>
           </div>
            </div>
            <div className="col-lg-6 left-side" data-aos="fade-left" >
            <img src={rightImage} className="img-fluid left-image"/>
            </div>

            </div>
            <hr style={{color:"white",marginTop:"2em"}}></hr>

            </div>
            
        )
    }
}
export default About

