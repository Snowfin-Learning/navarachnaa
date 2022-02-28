import { useState, useContext } from "react";
import DetailsLeft from "./DetailsLeft";
import DetailsList from "./DetailsList";
import SharedContext from "../../context/SharedContext";
const Details = () => {
  const {
    sharedData: { servicesData }
  } = useContext(SharedContext);

  const [state] = useState({
    heading: "To get support throught the event Contact Us.",
    subHeading: "Mrs.Rupali Bhartiya :- +91-9993928558 ",
    subHeading1: "Mr. Sunil Pipleya :- +91-7509521591",
    subHeading2: "Naman Patidar :- +91- 9111633800"
  });
  return (
    <div className="services">
      <div className="services__contents">
        <div className="container">
          <div className="row ml-minus-15 mr-minus-15 services__contents__container">
            <div className="col-6 p-15">
              <DetailsLeft
                heading={state.heading}
                subHeading={state.subHeading}
                subHeading1={state.subHeading1}
                subHeading2={state.subHeading2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
