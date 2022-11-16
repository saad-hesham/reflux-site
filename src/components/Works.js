
import { Component } from "react";
import image1 from "../images/portfolio-01.jpg"
import image2 from "../images/portfolio-02.jpg"
import image3 from "../images/portfolio-03.jpg"
import image4 from "../images/portfolio-04.jpg"
import image5 from "../images/portfolio-05.jpg"
import image6 from "../images/portfolio-06.jpg"
import {   faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {   faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {   faXmark } from "@fortawesome/free-solid-svg-icons";

import $ from 'jquery'; 
import Slider from "./Slider";



class Works extends Component{
    componentDidMount(){


$("li.type").click(function(){
    $("li.type").removeClass("acitve");
    $(this).addClass("acitve");
    $(".image-block").css({display:"none"});
    $("."+$(this).attr("id")).css({display:"block"})

    $("."+$(this).attr("id")).addClass("animate");
   
})

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
    

$(".search").click(function(){
    $(".slider").css({display:"flex"})
    counter = parseInt($(this).attr("data"))
    renderimage()
   
    
})
    }

    render(){

 
        return(
      <div className="row">
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
          <div className="col-lg-3 col-md-4">
              
              </div>
              <div className="col-lg-9 col-md-8 Works">
                  <div className="row">
                  <div className="col-sm-12 parent" id="works" >
            <h1 data-aos="fade-up">My Work</h1>
            <div className="line" data-aos="fade-up"></div>
            <p data-aos="fade-up">Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit amet. Duis ac elit vulputate, lobortis arcu quis, vehicula mauris.</p>
         <ul data-aos="fade-up">
         <li className="type acitve" id="all">All</li>
         <li className="type" id="people">People</li>
         <li className="type" id="nature"> Nature</li>
         <li className="type" id="animals">Animals</li>
         </ul>
         </div>
         <div className="col-lg-6 image-block animals all" style={{position:"relative"}} data-aos="fade-right">
<img src={image1} className="img-fluid"/>
<div className="white-screen">
                          <div>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="search" data="0"/>
                          <h3>First Item</h3>
                          <p>free to use our template</p>
                          </div>
                          </div>
<hr style={{color:"white"}}></hr>
                      </div>
                      <div className="col-lg-6 image-block people all" style={{position:"relative"}} data-aos="fade-left">
                      <img src={image2} className="img-fluid"/>
                      <div className="white-screen">
                          <div>
                      <FontAwesomeIcon icon={faMagnifyingGlass}  className="search" data="1"/>
                          <h3>Second Item</h3>
                          <p>free to use our template</p>
                          </div>
                          </div>

                      <hr style={{color:"white"}}></hr>

</div>

<div className="col-lg-6 image-block animals all" style={{position:"relative"}} data-aos="fade-right">
<img src={image3} className="img-fluid"/>
<div className="white-screen">
                          <div>
                      <FontAwesomeIcon icon={faMagnifyingGlass}  className="search" data="2"/>
                          <h3>Third Item</h3>
                          <p>free to use our template</p>
                          </div>
                          </div>
<hr style={{color:"white"}}></hr>


                      </div>

                      <div className="col-lg-6 image-block people all" style={{position:"relative"}} data-aos="fade-left">
<img src={image4} className="img-fluid"/>
<div className="white-screen">
                          <div>
                      <FontAwesomeIcon icon={faMagnifyingGlass}  className="search" data="3"/>
                          <h3>Fourth Item</h3>
                          <p>free to use our template</p>
                          </div>
                          </div>
<hr style={{color:"white"}}></hr>

                      </div>


                      <div className="col-lg-6 image-block nature all" style={{position:"relative"}} data-aos="fade-right">
<img src={image5} className="img-fluid"/>
<div className="white-screen">
                          <div>
                      <FontAwesomeIcon icon={faMagnifyingGlass}  className="search" data="4"/>
                          <h3>Fifth Item</h3>
                          <p>free to use our template</p>
                          </div>
                          </div>
<hr style={{color:"white"}}></hr>

                      </div>


                      <div className="col-lg-6 image-block nature all" style={{position:"relative"}} data-aos="fade-left">
<img src={image6} className="img-fluid"/>
<div className="white-screen">
                          <div>
                      <FontAwesomeIcon icon={faMagnifyingGlass}  className="search" data="5"/>
                          <h3>Sixth Item</h3>
                          <p>free to use our template</p>
                          </div>
                          </div>

<hr style={{color:"white"}}></hr>

                      </div>
                      </div>
              </div>
          </div>
            
        )
    }
}
export default Works

