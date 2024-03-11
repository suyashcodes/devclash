import "./aboutevent.css";
// import googleMapImage from "../../../public/assets/fonts/map.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
const Aboutevent = () => {
  return (
    <div className="wrap-about-us" id="about">
      <div className="eventContainer">
        <div className="eventSection">
          <h1 className="eventHeading">About Event</h1>
          <p className="eventPara">
            Get ready for an exhilarating hackathon experience at DEVCLASH Our
            event is a celebration of creativity, coding prowess, and teamwork.
            Join us on 10FEB to 11FEB for an unforgettable journey. Explore the
            world of technology, showcase your skills, and vie for incredible
            prizes. Let's innovate, collaborate, and create something
            extraordinary!
          </p>
        </div>
        <div className="eventSection withLocation">
          <h1 className="eventHeading">Event Location</h1>
          <a
            className="eventLocationAnchor"
            href="https://maps.app.goo.gl/hAtE8qGvbsAwTjtF7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="eventLocationImage"
              src={"./assets/fonts/map.png"}
              alt="Google Map showing event location"
            />
          </a>
        </div>
        <div className="eventSection withTiming">
          <h1 className="eventHeading">Event Timing</h1>
          <div className="timingCont">
            <CalendarMonthIcon className="icon" />
            <p className="timingText">From 10 Feb to 11 Feb 2024</p>
          </div>
          <div className="timingCont">
            <AccessTimeOutlinedIcon className="icon" />
            <p className="timingText">10:00 AM onwards</p>
          </div>
        </div>
      </div>
      <div className="aboutUs">
        <div className="aboutContent">
          <h1 className="aboutHeading">About Us</h1>
          <p className="aboutPara">
            DevKraft is a student-founded club on a mission to transform the
            engineering experience. We're dedicated to fostering a vibrant
            coding culture, making learning enjoyable, promoting holistic
            student development and help forge lasting connections with seniors
            and industry mentors who can help guide you through your journey. We
            also help students gain valuable industry insights in our expert
            panel events, where technical experts host interactive Q&A sessions.
            Furthermore, we provide a platform for the students to showcase
            their tech prowess in our technical challenge-based events.
          </p>
        </div>
        <div className="aboutImg">
          <img
            className="aboutUsImage"
            src={"./assets/avinyalogo.png"}
            alt="Google Map showing event location"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutevent;
