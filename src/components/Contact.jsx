import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="contactSection">
      <div className="sectionTitle">
        <h2>Contact</h2>
      </div>
      <div className="contactContainer">
        <div className="githubContainer contactIcons">
          <FontAwesomeIcon icon={faLinkedin} className="icons" />
        </div>
        <div className="emailContainer contactIcons">
          <FontAwesomeIcon icon={faGithub} className="icons" />
        </div>
        <div className="linkedinContainer contactIcons">
          <FontAwesomeIcon icon={faEnvelope} className="icons" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
