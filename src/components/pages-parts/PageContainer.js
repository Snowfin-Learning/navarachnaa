import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../footer/Footer";
const PageContainer = ({ data, children }) => {
  return (
    <>
      <Header heading={data.heading} />
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="col-6 animation">{children}</div>
            <div className="col-6">
              <div className="page__info">
                <h2 className="heading headingAnimation">{data.heading}</h2>
                <h1 className="page__info__heading animation">
                  {data.pageHeading}
                </h1>
                <p className="page__info__msg animation">{data.message}</p>
                <div style={{ marginTop: "5%", marginLeft: '5%' }}>
                  <h3 style={{ fontSize: 26 }}>Themes</h3>
                  <ul style={{ marginTop: "2%" }}>
                    <li style={{ fontSize: 18 }}>Digital India</li>
                    <li style={{ fontSize: 18 }}>National Health Mission</li>
                    <li style={{ fontSize: 18 }}>Make In India</li>
                    <li style={{ fontSize: 18 }}>Skill India</li>
                    <li style={{ fontSize: 18 }}>Smart City</li>
                    <li style={{ fontSize: 18 }}>Swachh Bharat Mission</li>
                    <li style={{ fontSize: 18 }}>Start-Up India</li>
                    <li style={{ fontSize: 18 }}>Genral Category</li>
                  </ul>
                </div>
                <div className="page__info__link animation">
                  <Link to="/" className="btn-dark">
                    go back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PageContainer;
