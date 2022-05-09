import React, { useEffect } from "react";
import HeroSectionComponent from "../../components/HeroSection/HeroSectionComponent";
import "./LandingPage.css";
import businessImage from "../../assets/images/business-logos/Group.svg";
import businessImage1 from "../../assets/images/business-logos/Group-1.svg";
import businessImage2 from "../../assets/images/business-logos/Group-2.svg";
import businessImage3 from "../../assets/images/business-logos/Group-3.svg";
import businessImage4 from "../../assets/images/business-logos/Group-4.svg";
import businessImage5 from "../../assets/images/business-logos/Group-5.svg";
import Illustration from "../../assets/images/Illustration.svg";
import cards from "../../assets/images/Cards.svg";
import clients from "../../assets/images/clients.svg";
import top from "../../assets/images/top.svg";
import star from "../../assets/images/Star.svg";
import mark from "../../assets/images/46-removebg-preview.png";
import linkToAccount from "../../assets/images/link-to-account.svg";
import {
  ContactUsForm,
  LoginForm,
} from "../../components/Forms/FormsComponent";
import AOS from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {" "}
      <div className="LandingPage container-lg">
        <HeroSectionComponent />

        <div className="row mt-3 business-section">
          <p className="text-center">
            Many businesses are growing with Telecom Merchant.
          </p>
          <BusinessLogos />
        </div>

        <div className="row Illustration-section mt-5">
          <div className="col-md-6 img-col" data-aos="fade-right">
            <img src={Illustration} alt="" />
          </div>
          <div className="col-md-6 text-col" data-aos="fade-left">
            <p>Our Feature </p>
            <h1>Safe Payment Swift Payment Easy Accesibility Affordable </h1>
            <button className="button ">Get Started</button>
          </div>
        </div>

        <div className="row form-section mt-5" data-aos="fade-up">
          <div className="col-md-6 text-col" data-aos="zoom-in">
            <p>Our Feature </p>
            <h1>Make payments quickly from anywhere</h1>
            <span>
              Why kept very ever home mrs. Considered sympathize ten uncommonly
              occasional assistance sufficient not. Letter of on become he
              tended active enable to.
            </span>
          </div>
          <div className="col-md-6 form-col" data-aos="zoom-in">
            <div className="form-div">
              {/* <p>Get Started for Free </p>
              <form action="">
                <input type="text" className="form-control" />
                <input type="text" className="form-control" />
                <button className="button w-100">GET STARED</button>
              </form> */}

              {/* <div id="mojoauth-passwordless-form"> </div> */}
              {/* <script> */}
              {/* {() => {
                const mojoauth = new MojoAuth(
                  "test-4dfa5ecd-c439-45bc-9dba-bd6e2e50e233",
                  {
                    source: [{ type: "email", feature: "magiclink" }],
                  }
                );
                mojoauth.signIn().then((response) => console.log(response));
              }} */}
              {/* </script> */}
              {/* <Forms /> */}
              <LoginForm />
              {/* <SignInForm /> */}
            </div>
          </div>
        </div>

        <div className="row Loyal-Customers-section mt-5">
          <div className="col-md-6 text-col" data-aos="fade-right">
            <p>Our Feature </p>
            <h1>All payments are possible with your favorite web browser. </h1>
            <span>
              Why kept very ever home mrs. Considered sympathize ten uncommonly
              occasional assistance sufficient not. Letter of on become he
              tended active enable to.{" "}
            </span>
            <br />
            <button className="button ">Get Started</button>
          </div>
          <div className="col-md-6 img-col" data-aos="fade-left">
            <img src={cards} alt="" />
          </div>
        </div>

        <div className="row clients-section mt-5">
          <div className="col-md-6 img-col" data-aos="fade-right">
            <div className="">
              <p>Testimonials</p>
              <h1>Check what our clients are saying</h1>
            </div>
            <img src={clients} alt="" />
          </div>
          <div className="col-md-6 text-col" data-aos="zoom-in">
            <img src={top} alt="" />
            {/* <p>Our Feature </p> */}
            <h1>
              Save More By Managing Expense When You Do Business With Home of
              VTU.{" "}
            </h1>
            <span>
              Is be upon sang fond must shew. Really boy law county she unable
              her sister. Feet you off its like like six. Among sex are leave
              law built now. In built table in an rapid blush. Merits behind on
              afraid or warmly. Believing neglected so so allowance existence
              departure in. In design active temper be uneasy.{" "}
            </span>
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="name">Angela Taylor</div>
            <div className="org">CEO SAMSUNG </div>
          </div>
        </div>

        {/*  */}
        <div className="row mt-5 residence" data-aos="zoom-up">
          <div className="col-10 text-col">
            <span>
              And residence for met the estimable disposing. Mean if he they
              been no hold mr. Is at much do made took held help.
            </span>
          </div>
          <div className="col-2 d-flex btn-div">
            <button className="button btn-round my-auto">Get Stared</button>
          </div>
        </div>
        {/*  */}

        <div className="row payments-section mt-5">
          <div className="col-md-6 img-col" data-aos="fade-left">
            <img src={linkToAccount} alt="" />
          </div>
          <div className="col-md-6 text-col d-flex " data-aos="fade-right">
            <div className="my-auto ">
              <p>Our Feature </p>
              <h1>All payments are linked to your Financy account</h1>
              <span>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.{" "}
              </span>{" "}
              <br />
              <button className="button ">Get Started</button>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="why-us" data-aos="zoom-in">
          <img src={mark} className="mark" alt="" />
          <div className="text-col">
            <p className="text-center">Why Financy</p>
            <h1 className="text-center">Why Choose Us</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="wy-card d-flex" data-aos="fade-right">
                <div>
                  {" "}
                  <div className="round-ball"></div>
                </div>
                <div>
                  <p>No Extra Fee </p>
                  <span>
                    End-to-end payments and financial management in a single
                    solution. Meet the right platform.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="wy-card d-flex" data-aos="fade-left">
                <div>
                  {" "}
                  <div className="round-ball"></div>
                </div>
                <div>
                  <p>No Extra Fee </p>
                  <span>
                    End-to-end payments and financial management in a single
                    solution. Meet the right platform.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="wy-card d-flex" data-aos="fade-right">
                <div>
                  {" "}
                  <div className="round-ball"></div>
                </div>
                <div>
                  <p>No Extra Fee </p>
                  <span>
                    End-to-end payments and financial management in a single
                    solution. Meet the right platform.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="wy-card d-flex" data-aos="fade-left">
                <div>
                  {" "}
                  <div className="round-ball"></div>
                </div>
                <div>
                  <p>No Extra Fee </p>
                  <span>
                    End-to-end payments and financial management in a single
                    solution. Meet the right platform.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-section p-4 mt-5" data-aos="zoom-in">
        <div className=" container-lg mt-5">
          <div className="row ">
            <div className="col-md-6 text-col" data-aos="fade-right">
              <p>Our Feature </p>
              <h1>Make payments quickly from anywhere</h1>
              <span>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.
              </span>
              {/* <div class="powr-map" id="d0afa79e_1651291104"></div>
              <script src="https://www.powr.io/powr.js?platform=react"></script> */}
            </div>
            <div className="col-md-6 form-col">
              <div className="form-div" data-aos="fade-left">
                <p>Get Started for Free </p>
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="" data-aos="zoom-in">
        <FooterComponent />
      </div>
    </>
  );
}

export default LandingPage;

export function BusinessLogos() {
  return (
    <ul>
      <li>
        <img src={businessImage} alt="" />
      </li>
      <li>
        <img src={businessImage1} alt="" />
      </li>
      <li>
        <img src={businessImage2} alt="" />
      </li>
      <li>
        <img src={businessImage3} alt="" />
      </li>
      <li>
        <img src={businessImage4} alt="" />
      </li>
      <li>
        <img src={businessImage5} alt="" />
      </li>
    </ul>
  );
}

export function FooterComponent() {
  return (
    <div className="FooterComponent">
      <div className="container pt-4">
        {/* <div className="row"> */}
        {/* <button className="button">Contact</button> */}
        {/* </div> */}

        <div className="footer-container">
          <div className="about">
            <b>About</b> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            accusamus nulla quaerat reiciendis laboriosam ad quia tempora, nisi
            architecto expedita
          </div>
          <div className="quick-Link">
            <b>Quick Link</b>
            <ul>
              <li>Link i</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
            </ul>
          </div>
          <div className="product">
            <b>Product</b>
            <ul>
              <li>Link i</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="down pb-3 d-flex justify-content-between">
          <p>
            {" "}
            2022 Telecom M. All rights reserved. -- Privacy Policy - Terms of
            Services
          </p>
          <p>Created by The Creators Technologies</p>
        </div>
      </div>
    </div>
  );
}
