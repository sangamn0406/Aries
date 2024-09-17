import os
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from gradio_client import Client
from PIL import Image
import cloudinary.uploader

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Cloudinary configuration
cloudinary.config(
    cloud_name="dtuqpup4a",  # replace with your Cloudinary cloud name
    api_key="291317165429892",  # replace with your Cloudinary API key
    api_secret="qJq00V57nGffgM_ev-BcG5Tbmnk"  # replace with your Cloudinary API secret
)

@app.route('/generate-ad', methods=['POST'])
def generate_ad():
    data = request.json
    topic = data.get('topic')

    logger.info(f"Route has received the data: {topic}")
    if not topic:
        return jsonify({"error": "No topic for ad was provided"}), 400

    try:
        # Construct the path to the video
        base_dir = os.path.dirname(os.path.abspath(__file__))
        public_dir = os.path.join(base_dir, '..', 'frontend', 'public')
        video_path = os.path.join(public_dir, 'aivideo.mp4')
        
        # Log the full path for debugging
        logger.info(f"Video path: {video_path}")
        
        # Ensure the video file exists before attempting to upload
        if not os.path.exists(video_path):
            logger.error(f"Video file not found: {video_path}")
            return jsonify({"error": "Video file not found"}), 404
        
        logger.info(f"Uploading {video_path} to Cloudinary...")
        cloudinary_result = cloudinary.uploader.upload_large(video_path, resource_type="video")
        cloudinary_url = cloudinary_result['secure_url']
        logger.info(cloudinary_url)
        return jsonify({"video_url": cloudinary_url})

    except Exception as e:
        logger.error(f"Error occurred: {str(e)}")
        return jsonify({"error": "An error occurred while uploading the video"}), 500

@app.route('/generate-blog', methods=['POST'])
def generate_blog():
    data = request.json
    topic = data.get('topic')

    logger.info(f"Received request to generate blog for topic: {topic}")

    if not topic:
        logger.error("No topic provided in the request.")
        return jsonify({"error": "No topic provided"}), 400

    try:
        logger.info("Initializing Gradio client...")
        client = Client("Nipun0724/astute")

        logger.info(f"Calling the API to generate blog for the topic: {topic}")
        result = client.predict(
            image_input=f"{topic}",
            api_name="/predict"
        )

        blog_post = result[0]
        image_path = result[1]
        
        if blog_post.startswith("Image:"):
            blog_post = blog_post.split('\n', 1)[-1].strip()
        
        title = ""
        if "Title:" in blog_post:
            title = blog_post.split("Title:", 1)[1].split("\n", 1)[0].strip()
            blog_post = blog_post.split("Title:", 1)[1].split("\n", 1)[-1].strip()

        if "Introduction:" in blog_post:
            blog_post = blog_post.split("Introduction:", 1)[1].strip()

        # Convert the image to PNG or JPEG before uploading to Cloudinary
        with Image.open(image_path) as img:
            converted_image_path = os.path.splitext(image_path)[0] + '.png'
            img.save(converted_image_path, 'PNG')
        
        logger.info("Uploading image to Cloudinary...")
        cloudinary_response = cloudinary.uploader.upload(converted_image_path)
        cloudinary_url = cloudinary_response['secure_url']

        if os.path.exists(converted_image_path):
            os.remove(converted_image_path)
                
        return jsonify({
            "blog_post": blog_post,
            "image_path": cloudinary_url,
            "title": title
        })

    except Exception as e:
        logger.error(f"An error occurred: {str(e)}")
        return jsonify({"error": "An error occurred while generating the blog"}), 500

if __name__ == '__main__':
    app.run(debug=True)