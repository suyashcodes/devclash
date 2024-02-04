import React from "react";
// import "./styles.css";

export default function Submissions() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyAAkwZcO3zvGlNLFmZu4bDOpFjNGsbnBLEs7OhVWk1dnVQd5z4nA5CCj5AGYMSPQfCJw/exec",
      {
        method: "POST",
        body: formDatab,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2>
        This demonstrates how to send data from a website form to Google sheet
        in React or Vanilla jS
      </h2>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Team Name" name="Name" type="text" />
          <input placeholder="Project Link" name="Link" type="text" />
          {/* <input placeholder="Your Message" name="Message" type="text" /> */}
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}
