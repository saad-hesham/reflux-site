
import { Component } from "react";
import image1 from "../images/portfolio-01.jpg"
import image2 from "../images/portfolio-02.jpg"
import image3 from "../images/portfolio-03.jpg"
import image4 from "../images/portfolio-04.jpg"
import image5 from "../images/portfolio-05.jpg"
import image6 from "../images/portfolio-06.jpg"
import $ from 'jquery'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {   faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {   faXmark } from "@fortawesome/free-solid-svg-icons";



class Slider extends Component{
    componentDidMount(){
        $(".close").click(function(){
            $(".slider").css({display:"none"})
        })
   let images = $(".slider-image")
let counter = 0
let right = $(".arrowRight")
let left = $(".arrowLeft")
    
let renderimage = ()=>{
    images.css({display:"none"})
    $(images[counter]).css({display:"block"})
}
left.click(function(){
    counter-=1;
    if(counter<=0){
        counter=0

    }

    renderimage()


})
right.click(function(){
    counter+=1;
    if(counter>=5){
        counter=5

    }

    renderimage()

})

    }

    render(){

 
        return(
     <div>
         
           <div className="slider" style={{display:"none"}}>
           <div className="close"><FontAwesomeIcon icon={faXmark}/></div>
               <div className="container" style={{display:"flex",justifyContent:"center"}}>
                   <div className="row">
                       <div className="col-sm-12" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                       <div style={{zIndex:"1",color:"white"}}><FontAwesomeIcon icon={faAngleLeft} style={{fontSize:"4em",marginRight:"-1em",cursor:"pointer"}} className="arrowLeft   " /></div>

                       <img src={image1} className="img-fluid slider-image" />
                       <img src={image2} className="img-fluid slider-image" style={{display:"none"}}/>
                       <img src={image3} className="img-fluid slider-image" style={{display:"none"}}/>
                       <img src={image4} className="img-fluid slider-image" style={{display:"none"}}/>
                       <img src={image5} className="img-fluid slider-image" style={{display:"none"}}/>
                       <img src={image6} className="img-fluid slider-image" style={{display:"none"}}/>
                      
                           <div style={{zIndex:"1",color:"white"}}><FontAwesomeIcon icon={faAngleRight} style={{fontSize:"4em",marginLeft:"-.6em",cursor:"pointer"}} className="arrowRight"/></div>

                           </div>
                       </div>

                   </div>
               
             </div>
     </div>
            
        )
    }
}
export default Slider

