import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import placeholder from "../../assets/placeholder.png";

const Advertisement = () => {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    if (prompt) {
      setLoading(true);
      setTimeout(() => {
        fetchVideoUrl();
      }, 10000);
      const fetchVideoUrl = async () => {
        try {
          const response = await axios.post(
            "http://127.0.0.1:5000/generate-ad",
            {
              topic: prompt,
            }
          );
          setVideoUrl(response.data.video_url);
        } catch (error) {
          console.error("Error fetching video URL:", error);
        } finally {
          setLoading(false);
        }
      };
    }
  }, [prompt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrompt(e.target.elements.prompt.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Generate Advertisement</h2>
      <hr style={{ width: "90%" }} />
      <div className="blog-page">
        <form onSubmit={handleSubmit} className="blog-form">
          <div>
            <label htmlFor="prompt" className="form-label">
              Prompt
            </label>
            <input
              type="text"
              className="form-control"
              id="prompt"
              placeholder="Enter your prompt here"
              required
            />
            <div className="invalid-feedback">Valid prompt is required.</div>
          </div>
          <button type="submit" className="button-30 submit-btn mt-4">
            Submit
          </button>
        </form>
        <div
          className="blog-post placeholder-blog placeholder-image mt-5"
          style={{ height: "55vh" }}
        >
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status"></div>
            </div>
          ) : videoUrl ? (
            <div className="placeholder-content">
              <ReactPlayer
                url={videoUrl}
                playing
                controls
                width="100%"
                height="100%"
              />
            </div>
          ) : (
            <div className="placeholder-content">
              <img src={placeholder} alt="" style={{ height: "150px" }} />
              <p>Your Ad goes here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
