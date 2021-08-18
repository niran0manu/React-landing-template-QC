import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Footer() {
    return (
        <div className="footer__container">
            <div class="footer__left">                  
                  <p> Option/Link</p>
                  <p> Option/Link</p>
                  <p> Option/Link</p>
                  <p> Option/Link</p>
                  <h4 class="footer-company-name"><span>Company-name</span> </h4>
         
            </div>
            <div class="footer-center">

                <div>
                
                <p><LocationOnIcon/><span>178 93 Drottningholm, </span> Sweden</p>
                </div>

                <div>
                <i class="fa fa-phone"></i>
                <p>  +759478978970</p>
                </div>

                <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">support@snabbacash.com</a></p>
                </div>

                </div>

                <div class="footer-right">

                <p class="footer-company-about">
                <span>About us</span> Blah Blah..Blah blah blah blah
                </p>

                <div class="footer__icons">
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                </div>


            
           </div>
        </div>   
    )
}

export default Footer


