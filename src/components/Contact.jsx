import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="contactSection" id="contactSection">
      <div className="sectionTitle">
        <h2>Contact</h2>
      </div>
      <div className="contactContainer">
        <a href="https://www.linkedin.com/in/madison--kramer/">
          <div className="contactIcons">
            <FontAwesomeIcon icon={faLinkedin} className="icons" />
          </div>
        </a>
        <a href="https://github.com/MadyKramer">
          <div className=" contactIcons">
            <FontAwesomeIcon icon={faGithub} className="icons" />
          </div>
        </a>
        <a href="mailto: Madison-CF@hotmail.fr">
          <div className="contactIcons">
            <FontAwesomeIcon icon={faEnvelope} className="icons" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
