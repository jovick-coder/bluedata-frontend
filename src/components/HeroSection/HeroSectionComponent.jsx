import React from "react";
import heroImage from "../../assets/images/heroImage.png";
import "./HeroSectionComponent.css";

function HeroSectionComponent() {
  return (
    <div className="row HeroSectionComponent">
      <div className="col-md-6 text-col my-auto">
        <h1>
          Paying for your internet subscription has never been cheap or easy.
        </h1>
        <p>
          ... a solution for end-to-end internet subscription payment coupled
          with easy accessibility and affordability.
        </p>
        <button className="button btn-round">Get Started</button>
      </div>
      <div className="col-md-6 image-col">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
}

export default HeroSectionComponent;
