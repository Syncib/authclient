import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import SlideFadeIn from "./SlideFadeIn";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer container-fluid bg-black bottom-0">
      <div className="row gap-5 gap-lg-0">
        <div className="col-12 col-lg-2">
          <div className="d-flex flex-column gap-5">
            <SlideFadeIn>
              <h5 className="text-white foot-head">Authsys.inc</h5>
              <p className="about-para">
                Far far away, behind
                <br />
                the word mountains,
                <br /> far from the countries.
              </p>
              <div className="d-flex gap-3">
                <div className="bg-dark rounded-circle p-2 ico-bg text-center">
                  <FaTwitter color="gray" />
                </div>
                <div className="bg-dark rounded-circle p-2 ico-bg text-center">
                  <FaFacebookF color="gray" />
                </div>
                <div className="bg-dark rounded-circle p-2 ico-bg text-center">
                  <FaInstagram color="gray" />
                </div>
              </div>
            </SlideFadeIn>
          </div>
        </div>
        <div className="col-12 col-lg-2">
          <div className="d-flex flex-column gap-5">
            <SlideFadeIn>
              <h5 className="text-white foot-head">Community</h5>
              <div>
                <div className="d-flex align-items-center about-para">
                  <FaChevronRight />
                  <span>Projects</span>
                </div>
                <div className="d-flex align-items-center about-para">
                  <FaChevronRight />
                  <span>Team</span>
                </div>
                <div className="d-flex align-items-center about-para">
                  <FaChevronRight />
                  <span>Reviews</span>
                </div>
                <div className="d-flex align-items-center about-para">
                  <FaChevronRight />
                  <span>FAQs</span>
                </div>
              </div>
            </SlideFadeIn>
          </div>
        </div>
        <div className="col-12 col-lg-2">
          <div className="d-flex flex-column gap-5">
            <SlideFadeIn>
              <h5 className="text-white foot-head">About Us</h5>
              <div>
                <div className="d-flex align-items-center about-para">
                  <FaChevronRight />
                  <span>Our Story</span>
                </div>
                <div className="d-flex align-items-center about-para">
                  <FaChevronRight />
                  <span>Meet the team</span>
                </div>
                <div className="d-flex align-items-center about-para">
                  <FaChevronRight />
                  <span>Careers</span>
                </div>
              </div>
            </SlideFadeIn>
          </div>
        </div>
        <div className="col-12 col-lg-2">
          <div className="d-flex flex-column gap-5">
            <SlideFadeIn>
              <h5 className="text-white foot-head">Company</h5>
              <div>
                <div className="d-flex align-items-center about-para">
                  <FaChevronRight />
                  <span>About Us</span>
                </div>
                <div className="d-flex align-items-center about-para">
                  <FaChevronRight />
                  <span>Press</span>
                </div>
                <div className="d-flex align-items-center about-para">
                  <FaChevronRight />
                  <span>Contact</span>
                </div>
                <div className="d-flex align-items-center about-para">
                  <FaChevronRight />
                  <span>Careers</span>
                </div>
              </div>
            </SlideFadeIn>
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <div className="d-flex flex-column gap-5 ">
            <SlideFadeIn>
              <h5 className="text-white foot-head">Have a Questions?</h5>
              <div className="d-flex flex-column questions">
                <div className="d-flex about-para gap-4">
                  <FaMap size={30} />
                  <span>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </div>
                <div className="d-flex align-items-center about-para gap-4">
                  <FaPhoneAlt />
                  <span>+2 392 3929 210</span>
                </div>
                <div className="d-flex align-items-center about-para gap-4">
                  <FaEnvelope />
                  <span>info@yourdomain.com</span>
                </div>
              </div>
            </SlideFadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
