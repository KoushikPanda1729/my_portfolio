import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

// Social media images mapping
const socialImages = {
  "fa-github": require("../../assets/images/social_images/github.png"),
  "fa-linkedin-in": require("../../assets/images/social_images/linked_in.png"),
  "fa-x-twitter": require("../../assets/images/social_images/twitter.png"),
};

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        const iconClass =
          media.fontAwesomeIcon === "fa-envelope" ? "fas" : "fab";
        const hoverImage = socialImages[media.fontAwesomeIcon];
        const isEmail = media.fontAwesomeIcon === "fa-envelope";
        const emailAddress = isEmail ? media.link.replace("mailto:", "") : null;

        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button social-icon-wrapper`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i className={`${iconClass} ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
            {hoverImage && (
              <div className="social-hover-image">
                <img src={hoverImage} alt={`${media.fontAwesomeIcon} preview`} />
              </div>
            )}
            {isEmail && emailAddress && (
              <div className="social-hover-email">
                <span className="email-text">{emailAddress}</span>
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
}
