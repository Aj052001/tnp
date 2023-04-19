import "./Landing.css";
import MySlider from "./MySlider.jsx";
import iitbhopal_img from "./images/iiitBhopal_logo.png";
function Landing() {
  return (
    <div className="CompletePage">
    <section className="Home">
      <div className="HomeContainer">
        <div className="collegeImg">
          <img src={iitbhopal_img} alt="" />
        </div>
        <div className="HomeDesc">
          <div className="tnpHeading">Training And Placement Cell</div>
          <div className="CollegeName">
            Indian Institue Of Information Technology Bhopal
          </div>
          {/* <div className="CollegeNameHindi">
          भारतीय सूचना प्रौद्योगिकी संस्थान भोपाल
          </div> */}
        </div>
      </div>
    </section>
    <MySlider />
    </div>
  );
}

export default Landing;
