import "./Features.css";

const Features = () => {
  return (
    <div>
      <div className="features-container">
        <div
          className="tilt-container card-one"
          style={{
            boxShadow: "0 48px 60px 0 rgba(2,14,26,.24)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="tilt-content"></div>
        </div>
        <div
          className="tilt-container card-two"
          style={{
            boxShadow: "0 48px 60px 0 rgba(2,14,26,.24)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="tilt-content"></div>
        </div>
        <div
          className="tilt-container card-three"
          style={{
            boxShadow: "0 48px 60px 0 rgba(2,14,26,.24)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="tilt-content"></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
