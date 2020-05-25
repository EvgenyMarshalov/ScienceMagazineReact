import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                       <h3 className="row justify-content-center">© Science Magazine, 2020</h3>
                    </div>
                     <div className="col-7 col-sm-5">
                         <h5>Our Address</h5>
                         <address>
                           153000, Russian Federation, Ivanovo, Rabfakovskaya str., 34<br />
                           <i className="fa fa-phone fa-lg"></i> +7 4932 269-000<br />
                           <i className="fa fa-fax fa-lg"></i> +7 4932 269-000<br />
                           <i className="fa fa-envelope fa-lg"></i> <a class="email" href="mailto:sciencemagazine@ispu.ru">sciencemagazine@ispu.ru</a>
                        </address>
                     </div>
                     <div className="col-12 col-sm-4 align-self-center">
                         <div className="text-center">
                           <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                           <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                           <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                           <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                           <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                           <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
