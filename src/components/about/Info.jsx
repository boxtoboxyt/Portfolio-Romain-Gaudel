import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Expérience</h3>
        <span className="about__subtitle">1 an</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Complété</h3>
        <span className="about__subtitle">20 + Projets</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>

        <h3 className="about__title">Actuellement</h3>
        <span className="about__subtitle">Disponnible</span>
      </div>
    </div>
  );
};

export default Info;
