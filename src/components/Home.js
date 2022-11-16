import { Component } from "react";
import Navbar from "./Navbar"
import {  faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./About";
import WhatImGoodAt from "./WhatImGoodAt";
import Works from "./Works";
import Contact from "./Contact";

import AOS from 'aos';
import "aos/dist/aos.css";
class Home extends Component{
    componentDidMount() {
        AOS.init({
          duration : 2000
        });
    
}

    render(){

 
        return(
            <div className="Home" style={{display:"flex"}} >
                <div className="container">
                 <FontAwesomeIcon icon={faBars} style={{color:"white",position:"fixed",background:"#7c323d",fontSize:"3em",padding:".2em",top:"0",left:"0",zIndex:"999"}} id="bars"/>

         <div className="row"  >
          <Navbar/>

<div className="col-sm-8 col-lg-3 col-md-4 " style={{opacity:"0",zIndex:"-1",height:"100%"}}>
    
    </div>

<About />
<WhatImGoodAt/>
<Works/>
<Contact/>
          
         
          </div>
          <div>
        
                  
              </div>
         </div>
        
         
        
            </div>
        )
    }
}
export default Home