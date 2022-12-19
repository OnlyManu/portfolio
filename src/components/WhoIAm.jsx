import profilepic from "./../assets/profilePic.png";
import cv from "./../assets/cv.pdf"

//State

//Comportement
const WhoIAm = () => {
  //Render
  return (
    <section className="whoIAm">
      <div className="sectionTitle">
        <h2>Qui suis-je?</h2>
      </div>
      <div className="presentationContainer">
        <div className="picSection">
          <img src={profilepic} alt="" className="profilePic" />
        </div>
        <div className="presentation">
          <div className="presentationP">
            <p>
              Hello! Je m'appelle Madison, j'ai 28 ans et je vis dans le
              Nord-Est de la France. <br /> En 2021, j'ai décidé d'exércer un
              métier passionnant, porteur et innovant : celui de développeuse
              web!
              <br /> Après un bootcamp "Get Into Tech" chez Inco Academy pour
              confirmer mon projet professionnel, j'ai effectué la formation de
              développeur web chez OpenClassrooms. Et je viens tout juste d'être
              diplômée! <br /> Je suis actuellement à la recherche d'offres dans
              le secteur. Vous êtes au bon endroit pour connaître mon parcours,
              mes projets ainsi que mes hard skills!
            </p>
          </div>
          <div className="downloadCVButton">
            <a href={cv} download className="downloadCVLink">Téléchargez mon CV!</a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default WhoIAm;
