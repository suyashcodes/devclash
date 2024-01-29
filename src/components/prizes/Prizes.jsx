import "./prizes.css";

const Prizes = () => {
  return (
    <div className="prizes" id="prizes">
      <h1 className="prizes-title">Prizes</h1>
      <div className="prizes-container">
        <div className="prizes-card">
          <img className="prizes-img" src="./assets/cash2.png" alt="cash" />
          <h2 className="prizes-amount">Upto $10k</h2>
        </div>
        <div className="prizes-card">
          <img className="prizes-img" src="./assets/trophy2.png" alt="cash" />
          <h2 className="prizes-amount">DEVELOPER OF THE YEAR TITLE</h2>
        </div>
        <div className="prizes-card">
          <img className="prizes-img" src="./assets/prizes.png" alt="cash" />
          <h2 className="prizes-amount">GOODIES</h2>
        </div>
        <div className="prizes-card">
          <img className="prizes-img" src="./assets/intern.png" alt="cash" />
          <h2 className="prizes-amount">INTERNSHIP OPPORTUNITY</h2>
        </div>
      </div>
    </div>
  );
};
export default Prizes;
