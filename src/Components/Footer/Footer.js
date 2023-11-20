import React from "react";
import "./Footer.css";
import { BsArrowRight } from "react-icons/bs";
import logo from "../Assets/logo.avif";
import { Link } from "react-router-dom";
import { AiOutlineTwitter,AiFillFacebook,AiOutlineInstagram } from "react-icons/ai";
import { BiLogoTiktok,BiLogoYoutube } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-h1 text-center">Get 10% off your first order.</h1>
      <p className="footer-p1 text-center">
        Plus get early access to new launches and our best self-care tips.
      </p>
      <div className="d-flex justify-content-center">
        <div className="input-wrap">
          <input type="email" className="footer-input" required />
          <label>Email</label>
          <BsArrowRight type="button" className="footer-email-btn" />
        </div>
      </div>
      <div className="footer-menu container-fluid">
        <div className="row">
          <div className="col footer-div">
            <h5 className="footer-heading">Shop</h5>
            <p>
              <Link to="hair" className="footer-links">
                Hair
              </Link>
            </p>
            <p>
              <Link to="body" className="footer-links">
                Body
              </Link>
            </p>
            <p>
              <Link to="face" className="footer-links">
                Face
              </Link>
            </p>
            <p>
              <Link to="kits" className="footer-links">
                Kits
              </Link>
            </p>
          </div>
          <div className="col footer-div">
            <h5 className="footer-heading">About </h5>
            <p>
              <Link to="hair" className="footer-links">
                Our story
              </Link>
            </p>
            <p>
              <Link to="body" className="footer-links">
                Shipping and returns
              </Link>
            </p>
            <p>
              <Link to="face" className="footer-links">
                Contact
              </Link>
            </p>
            <p>
              <Link to="kits" className="footer-links">
                Blog
              </Link>
            </p>
          </div>
          <div className="col footer-div">
            <h5 className="footer-heading">Our mission</h5>
            <p className="footer-p">
              We make the internet's favorite men's products. No harmful
              chemicals and made in the USA.
            </p>
          </div>
          <div className="col footer-div">
            <img src={logo} className="footer-img" alt="logo" />
          </div>
        </div>
      </div>
      <div className="footer-icon-div text-center">
      <AiOutlineTwitter className="footer-icon"/>
      <AiFillFacebook className="footer-icon"/>
      <AiOutlineInstagram className="footer-icon" />
      <BiLogoTiktok className="footer-icon"/>
      <BiLogoYoutube className="footer-icon"/>
      </div>
      <hr className="footer-hr-line"/>
      <div className="footer-copyright text-center">
        <span className="footer-copyright-year">© 2023,</span>
        <Link to="" className="footer-copyright-link">
                
              </Link>
              <Link to="" className="footer-copyright-link">
              &nbsp;them-refresh-demo 
              </Link>
              <Link to="" className="footer-copyright-link">
              &nbsp;Powered by Shopify 
              </Link>

      </div>
    </div>
  );
};

export default Footer;
