import profilepic from "./../assets/profilepic.jpg";

//State

//Comportement
const WhoIAm = () => {
  //Render
  return (
    <section className="WhoIAm">
      <div className="sectionTitle">
        <div className="picSection"></div>
        <div className="presentation">
          <div className="presentationP">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat
            </p>
          </div>
          <div className="downloadCVButton">
            <button>Telecharger mon CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;
