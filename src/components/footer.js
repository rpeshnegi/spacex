import React from "react"
import Footerlogo from "../images/SpaceX-Logo.svg"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 bg-gray">
                        <div className="row">

                            <div className="col-md-3 footerblock border-right">
                                <h4> CONTACTS </h4>
                                <ul>
                                    <li> <a href="tel:32484267794">+32 484 26 77 94 </a>   </li>
                                    <li> <a href="tel:32484267794">+32 484 26 77 94 </a>  </li>
                                    <li>  <a href="mailto:info@spacex.com">info@spacex.com </a>   </li>

                                </ul>
                            </div>

                            <div className="col-md-3 footerblock border-right">
                                <h4> ABOUT </h4>
                                <ul>
                                    <li> <Link to="/">About us</Link>   </li>
                                    <li> <Link to="/">Careers</Link> </li>
                                    <li>  <Link to="/">Shop</Link></li>

                                </ul>
                            </div>

                            <div className="col-md-3 footerblock border-right">
                                <h4> SOCIAL MEDIA  </h4>
                                <ul>
                                    <li> <Link to="/">Facebook</Link>   </li>
                                    <li> <Link to="/">Twitter</Link>  </li>
                                    <li>  <Link to="/">Vimeo</Link>   </li>

                                </ul>
                            </div>

                            <div className="col-md-3 footerblock border-right">
                                <h4> ROCKETS  </h4>
                                <ul>
                                    <li> <Link to="/">Falcon Heavy</Link>   </li>
                                    <li> <Link to="/">Falcon 9</Link>  </li>
                                    <li>  <Link to="/">Falcon 1</Link>   </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 newsletter-block" >
                        <h4> GET UPDATES </h4>
                        <p> Subscribe and get updates about our rocket launches and everything around SpaceX </p>

                        <label htmlFor="inlineFormInputGroupUsername">Email</label>
                        <div className="input-group">

                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                            <div className="input-group-prepend">
                                <div className="input-group-text btn btn-primary"> Ok  </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid extra-space footerbottom">
                <div className="row align-items-center">
                    <div className="col-md-6 text-left copyright">
                        © 2019 SPACE EXPLORATION TECHNOLOGIES CORP.
                </div>
                    <div className="col-md-6 text-right">
                        <img src={Footerlogo} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default Footer