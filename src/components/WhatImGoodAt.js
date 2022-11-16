
import { Component } from "react";
import iconone from "../images/first-main-icon.png"
import icontwo from "../images/second-main-icon.png"
import iconthree from "../images/third-main-icon.png"
import iconfour from "../images/fourth-main-icon.png"
import white1 from "../images/first-white-icon.png"
import white2 from "../images/second-white-icon.png"
import white3 from "../images/third-white-icon.png"
import white4 from "../images/fourth-white-icon.png"
import $ from 'jquery'; 

class WhatImGoodAt extends Component{
    componentDidMount(){
        $(".block").mouseenter(function(){
$(this).children("div").children("div").children(".will-fade").css({opacity:"0"})
        })

        $(".block").mouseleave(function(){
            $(this).children("div").children("div").children(".will-fade").css({opacity:"1"})
                    })
    }

    render(){

 
        return(
            <div className="row WhatImGoodAt" style={{marginTop:"5em"}} >
                            <div className="col-lg-3  col-md-4 ">
</div>
            <div className="col-md-8 ">

            <div className="col-sm-12 parent" id="good">
            <h1 data-aos="fade-up">What I’m good at?</h1>
            <div className="line" data-aos="fade-up"></div>
            <p data-aos="fade-up">Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor. Vestibulum congue leo et tellus aliquam, eu viverra nulla semper. Nullam eu faucibus diam. Donec eget massa ante.</p>
         
         </div>

         <div className="row" style={{marginTop:"5em",justifyContent:"space-evenly"}}>
         <div className="col-lg-6 block"  data-aos="fade-right">
             <div>
             <div style={{position:"relative",height:"4em"}}>
             <img src={iconone} style={{position:"absolute"}}/>
             <img src={white1} style={{position:"absolute"}}  className="will-fade"/>

             </div>

             <h3>HTML5 &#38; CSS3</h3>
             <p>
             Phasellus non convallis dolor. Integer tempor hendrerit arcu at bibendum. Sed ac ante non metus vehicula congue quis eget eros.
             </p>
             </div>
            </div>
            <div className="col-lg-6 block" data-aos="fade-left">
             <div>
             <div style={{position:"relative",height:"4em"}}>
             <img src={icontwo} style={{position:"absolute"}} />
             <img src={white2} style={{position:"absolute"}} className="will-fade"/>

             </div>

             <h3>Creative Ideas</h3>
             <p>
             Proin lacus massa, eleifend sed fermentum in, dignissim vel metus. Nunc accumsan leo nec felis porttitor, ultricies faucibus purus mollis.             </p>
             </div>
            </div>
            <div className="col-lg-6 block"data-aos="fade-right" >
             <div>
             <div style={{position:"relative",height:"4em"}}>
             <img src={iconthree} style={{position:"absolute"}}/>
             <img src={white3} style={{position:"absolute"}}  className="will-fade"/>

             </div>

             <h3>Easy Customize</h3>
             <p>
             Integer suscipit condimentum aliquet. Nam quis risus metus. Nullam faucibus quam eget arcu pretium tincidunt. Nam libero dui.
             </p>
             </div>
            </div>
            <div className="col-lg-6 block" data-aos="fade-left" >
             <div>
             <div style={{position:"relative",height:"4em"}}>
             <img src={iconfour} style={{position:"absolute"}}/>
             <img src={white4} style={{position:"absolute"}}  className="will-fade"/>

             </div>

             <h3>Admin Dashboard</h3>
             <p>
             Vivamus et dui a massa venenatis fringilla. Proin lacus massa, eleifend sed fermentum in, dignissim vel metus. Nunc accumsan leo nec felis porttitor.
             </p>
             </div>
            </div>
            </div>

        
            <hr style={{color:"white",marginTop:"2em"}} data-aos="fade-up"></hr>

            </div>

            </div>
            
        )
    }
}
export default WhatImGoodAt

