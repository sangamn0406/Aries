import React, { useState } from "react";
import axios from "axios";
import "./Blogs.css";
import placeholder from "../../assets/placeholder.png";

function Generate_Blog() {
  const [blogPost, setBlogPost] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const topic = e.target.firstName.value;

    setLoading(true); // Set loading to true immediately after form submission

    try {
      // Simulate an API call with a 3-second delay
      setTimeout(() => {
        setBlogPost(`Introduction:

Milk has long been celebrated as a fundamental food source, providing essential nutrients that contribute to overall health. Whether enjoyed on its own, poured over cereal, or used in cooking and baking, milk remains a dietary cornerstone for many cultures. This blog explores the nutritional benefits of milk, its role in a balanced diet, and why it should continue to be a staple in your daily routine.

Nutritional Value of Milk:

Milk is renowned for its rich nutritional profile, offering a unique combination of proteins, fats, vitamins, and minerals that are vital for the body’s well-being. Here are some of the key nutrients found in milk:

Calcium: Essential for maintaining strong bones and teeth, calcium is one of the most critical minerals in milk. Regular consumption of milk can help prevent bone-related conditions such as osteoporosis, especially in older adults.

Protein: Milk is a high-quality protein source, containing all nine essential amino acids that the body needs to function properly. This makes it a complete protein, ideal for muscle growth, repair, and overall maintenance.

Vitamins: Milk is rich in several important vitamins, including vitamin D, which enhances calcium absorption, and vitamin B12, which is crucial for red blood cell formation and neurological function.

Potassium: Potassium helps regulate fluid balance, muscle contractions, and nerve signals. Consuming milk regularly can help maintain healthy blood pressure levels by balancing the effects of sodium in the diet.

Health Benefits of Milk:

Supports Bone Health: The calcium and vitamin D content in milk are crucial for maintaining bone density and strength. Drinking milk regularly helps reduce the risk of fractures and other bone-related issues, making it especially important for children and the elderly.

Aids Muscle Growth and Recovery: The protein in milk supports muscle repair and growth, making it an excellent post-workout beverage. After physical activity, drinking milk can help replenish nutrients and promote muscle recovery.

Promotes Weight Management: Contrary to popular belief, milk can be part of a weight management plan. The protein in milk can increase satiety, helping to control appetite and reduce overall calorie intake.

Contributes to Heart Health: Potassium plays a vital role in heart health by helping to regulate blood pressure. Incorporating milk into your diet can contribute to a healthier heart and reduce the risk of cardiovascular diseases.

Enhances Hydration: Milk is not only nutritious but also hydrating. With its balance of electrolytes, milk serves as an effective hydration option, particularly after exercise, where it helps replace fluids lost through sweat.

Incorporating Milk into Your Diet:

Adding milk to your diet is simple and versatile. Enjoy a glass with meals, use it in smoothies, or incorporate it into various recipes, from creamy soups to baked goods. For those who are lactose intolerant or prefer non-dairy options, lactose-free milk or fortified plant-based alternatives like almond, soy, or oat milk are excellent substitutes that still provide essential nutrients.

Conclusion:

Milk is a nutritional powerhouse that offers a wide range of health benefits. From supporting strong bones and muscles to aiding in weight management and hydration, milk is an essential part of a balanced diet. Whether you’re young or old, incorporating milk into your daily routine can help ensure that you receive the nutrients your body needs to stay healthy and strong. So, next time you reach for a drink, consider a glass of milk and enjoy all the benefits it has to offer.`);
        setImageSrc(
          "https://ischoolconnect.com/blog/wp-content/uploads/2022/08/milk.jpg"
        );
        setTitle(
          "The Nutritional Powerhouse: Why Milk Should Be a Staple in Your Diet"
        );
        setLoading(false); // Set loading to false after the simulated API response
      }, 10000);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false); // Ensure loading is set to false if an error occurs
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Generate Blog Post</h2>
      <hr style={{ width: "90%" }} />
      <div className="blog-page">
        <form onSubmit={handleSubmit} className="blog-form">
          <div>
            <label htmlFor="firstName" className="form-label">
              Enter the topic for blog
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder=""
              required
            />
            <div className="invalid-feedback">Valid name is required.</div>
          </div>
          <button type="submit" className="button-30 submit-btn mt-4">
            Submit
          </button>
        </form>

        {loading ? (
          <div className="blog-post placeholder-blog">
            <div className="text-center">
              <div className="spinner-border" role="status"></div>
            </div>
          </div>
        ) : blogPost ? (
          <article className="blog-post mt-2">
            <h2 className="display-6 link-body-emphasis mt-3 px-3">{title}</h2>
            <p className="blog-post-meta mx-3">
              {new Date().toDateString()} by <a href="#">Aditya</a>
            </p>
            <img
              src={imageSrc}
              alt="Generated Blog"
              className="mx-3"
              style={{ width: "40vw", height: "40vh" }}
            />
            <p style={{ lineHeight: "1.8rem", padding: "20px 15px" }}>
              {blogPost}
            </p>
          </article>
        ) : (
          <div className="blog-post placeholder-blog">
            <div className="placeholder-content">
              <img src={placeholder} alt="" style={{ height: "150px" }} />
              <p>Your blog goes here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Generate_Blog;
