import { PersonalCardContainer, LinkRowSection } from "./styles";
import { contactInfo } from "components/Data/contactInfo";

const PersonalCard = (): JSX.Element => {
  return (
    <PersonalCardContainer>
      <div className="personal-pic">
        <img src={contactInfo.userPicture} alt={contactInfo.fName} />
      </div>

      <div className="full-name">
        <h5>{contactInfo.fName}</h5>
        <h5>{contactInfo.lName}</h5>
      </div>

      <h6 className="job-title">{contactInfo.position}</h6>

      <div className="my-location">
        <a href={contactInfo.geoLocation} target="_blank" rel="noreferrer">
          {contactInfo.location}
        </a>
      </div>

      <div className="phone">
        <p>
          <span>Phone:</span>
          <a href={`tel:${contactInfo.phone}`}>&nbsp; {contactInfo.phone}</a>
        </p>
      </div>

      <div className="email">
        <p>
          <span>Email:</span>
          <a href={`mailto:${contactInfo.email}`}>&nbsp; {contactInfo.email}</a>
        </p>
      </div>

      <LinkRowSection>
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noreferrer"
          title="Github"
        >
          {contactInfo.githubIcon}
        </a>

        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
        >
          {contactInfo.linkedinIcon}
        </a>
      </LinkRowSection>
    </PersonalCardContainer>
  );
};

export default PersonalCard;
