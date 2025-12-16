import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;

    // Flatten all experiences from all sections
    const allExperiences = this.props.sections.flatMap(
      (section) => section.experiences
    );

    return (
      <div className="experience-accord">
        <div className="experience-cards-div">
          {allExperiences.map((experience, index) => {
            return (
              <ExperienceCard
                key={index}
                index={index}
                totalCards={allExperiences.length}
                experience={experience}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ExperienceAccordion;
