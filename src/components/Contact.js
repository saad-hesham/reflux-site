
import { Component } from "react";




class Contact extends Component{
    componentDidMount(){



    }

    render(){

 
        return(
      <div className="row" style={{marginTop:"5em"}}>
         
          <div className="col-lg-3 col-md-4"></div>

              <div className="col-lg-9 col-md-8 contact">
                  <div className="row">
                  <div className="col-sm-12 parent" id="contact">
            <h1>Contact Me</h1>
            <div className="line"></div>
            <p>Fusce eget nibh nec justo interdum condimentum. Morbi justo ex, efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form>
            <div className="row" style={{dispay:"flex",justifyContent:"space-evenly"}}>
            <input type="text" className="col-lg-5" placeholder="Your Name"/>
            <input type="text" className="col-lg-5" placeholder="Your Email..."/>
            <input type="text" className="col-lg-12" placeholder="Subject..."/>
            <textarea placeholder="Your Message"/>
            <input type="submit" value="Send Message" width="2em"/>
                </div>
      </form>

            </div>
            </div>
            </div>
            </div>
         
            
        )
    }
}
export default Contact

