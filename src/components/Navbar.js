
import { Component } from "react";
import picture from "../images/author-image.jpg"
import {  faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {  faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import {  faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {  faDribbble } from "@fortawesome/free-brands-svg-icons";
import {  faRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery'; 


class Navbar extends Component{
    componentDidMount(){

  $(window).scroll(function(){

    if( window.scrollY >=$("#about").offset().top-120){
        $(".link").removeClass("active-link")

       $(".about").addClass("active-link")
    }

 

    if( window.scrollY >=$("#good").offset().top-120){
        $(".link").removeClass("active-link")

       $(".good").addClass("active-link")
    }

    if( window.scrollY >=$("#works").offset().top-120){
        $(".link").removeClass("active-link")

       $(".works").addClass("active-link")
    }

    if( window.scrollY >=$("#contact").offset().top-500){
        $(".link").removeClass("active-link")

       $(".contact").addClass("active-link")
    }
  })
        
        $(".link").click(function(){
            $('html, body').animate({
                scrollTop: $("#"+$(this).attr("datatype")).offset().top-100
              },500);
        })
        $(window).resize(function(){
            if($(window).width()>768){
                $("nav").fadeIn();
                $("#bars").fadeOut();
                $("#bars").css({opacity:"0"})
                
            }
            if($(window).width()<768){
                $("#bars").fadeIn();
                $("#bars").css({opacity:"1"})

                
            }
        
         
    })

        function fadeout(){
            $("nav").fadeOut();
            $("#bars").fadeIn()
        }
        function fadein(){
            $("nav").fadeIn();
            $("#bars").fadeOut()

        }
      
        $("#button").click(fadeout)
        $("#bars").click(fadein)

    
    

    }

    

    render(){

        return(
   
            <nav className="col-sm-8 col-lg-2 col-md-3 " style={{padding:"0"}}>
<button id="button">x</button>
            <div>
            <img src={picture}/>
            <h2>Reflux Me</h2>
            <p>Web Designer</p>
            <ul>
            <li className="link about" datatype="about">About Me</li>
            <li className="link good" datatype="good">What I’m good at</li>
            <li className="link works" datatype="works">My Work</li>
            <li className="link contact" datatype="contact">Contact Me</li>
            </ul>
           <a href="https://www.facebook.com/" style={{color:"white",textDecoration:"none"}} target="blank"> <FontAwesomeIcon icon={faFacebookF} className="nav-bar-icon" /></a>
           <a href="https://twitter.com/" style={{color:"white",textDecoration:"none"}} target="blank">  <FontAwesomeIcon icon={faTwitterSquare} className="nav-bar-icon" /></a>
           <a href="https://www.linkedin.com/feed/" style={{color:"white",textDecoration:"none"}} target="blank"> <FontAwesomeIcon icon={faLinkedin}  className="nav-bar-icon"/></a>
           <a href="#" style={{color:"white",textDecoration:"none"}} target="blank"> <FontAwesomeIcon icon={faDribbble}  className="nav-bar-icon"/></a>
           <a href="#" style={{color:"white",textDecoration:"none"}} target="blank"> <FontAwesomeIcon icon={faRss}  className="nav-bar-icon"/></a>
          <hr style={{marginTop:"2em",width:"88%",marginLeft:"2em"}}></hr>
           <footer>Copyright 2019 Reflux Design</footer>

            </div>

            </nav>
       
        
        )
    }
}
export default Navbar