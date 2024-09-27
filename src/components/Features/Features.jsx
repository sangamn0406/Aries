import "./Features.css";
import p1 from "../../assets/11.png"
import p2 from "../../assets/2.png"
import p3 from "../../assets/3.png"

const Features = () => {
  return (
<div class="card-container">
      <div class="card-1">
        <img src={p1} />
        <div class="content">
          <h2>BOOST SOCIAL CONNECTIVITY</h2>
          <p>
            Enhance your social media engagement and reach a wider audience with
            AI-generated content tailored for maximum impact across platforms.
          </p>

        </div>
      </div>

      <div class="card-1">
        <img src={p2} />
        <div class="content">
          <h2>INCREASE BRAND VISIBILITY</h2>
          <p>
            Create consistent and professional branding with ease, helping your
            startup stand out and attract more customers, leading to stronger
            brand recognition.
          </p>

        </div>
      </div>

      <div class="card-1">
        <img src={p3} />
        <div class="content">
          <h2>DRIVE HIGHER PROFITS</h2>
          <p>
            Save time and resources by automating your content creation,
            allowing you to focus on scaling your business and increasing
            profitability through optimized marketing efforts.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Features;
