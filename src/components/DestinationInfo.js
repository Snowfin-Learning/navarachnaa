import DestinationDetails from "./DestinationDetails";
const DestinationInfo = ({ details }) => {
  return (
    <div className="destinationInfo">
      <div className="container">
        <h2 className="heading headingAnimation">Overview</h2>
        <div className="row">
          <div className="col-8">
            <p className="destinationInfo__p animation">{details.details}</p>
          </div>
        </div>
        <a href="https://bit.ly/3J3gXDv" >
          <button className="btn-default" style={{marginTop: '3%'}}>Register</button>
        </a>
      </div>
    </div>
  );
};
export default DestinationInfo;
