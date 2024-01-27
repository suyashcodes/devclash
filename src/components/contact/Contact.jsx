import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      {/* <h1 className="contact-heading">Contact Us</h1> */}
      <img
        className="contact-img"
        src="./assets/Eventtrans.png"
        alt="contact"
      />
      <div className="contact-container">
        <h1 className="contact-heading">Contact</h1>
        <div className="contact-info">
          <img className="icon" src="./assets/email.png" alt="location" />
          <img className="icon" src="./assets/location.png" alt="location" />
          <img className="icon" src="./assets/call.png" alt="location" />
        </div>
        <h1 className="contact-heading">Social</h1>
        <div className="contact-info">
          <img className="icon" src="./assets/whatsapp.png" alt="location" />
          <img className="icon" src="./assets/email.png" alt="location" />
          <img className="icon" src="./assets/linkedin.png" alt="location" />
        </div>
        <h3 className="copyright">Design and Developed by Devkraft &copy;</h3>
      </div>
    </div>
  );
};
export default Contact;
