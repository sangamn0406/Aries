import os
from huggingface_hub import hf_hub_download, login
import shutil
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Set your Hugging Face access token
os.environ["HUGGINGFACEHUB_API_TOKEN"] = "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"

# Log in to Hugging Face Hub
logger.info("Logging in to Hugging Face Hub")
login(token=os.environ["HUGGINGFACEHUB_API_TOKEN"])

# Download and save the model
def save_model():
    try:
        logger.info("Downloading model from Hugging Face Hub")
        model_path = hf_hub_download(
            repo_id="TheBloke/Llama-2-7B-Chat-GGML",
            filename="llama-2-7b-chat.ggmlv3.q8_0.bin"
        )

        # Move the downloaded model file to a desired location (e.g., 'app/' folder)
        target_path = 'app/llama_model.bin'
        shutil.move(model_path, target_path)
        logger.info(f"Model saved successfully to {target_path}")

    except Exception as e:
        logger.error(f"Error downloading or saving model: {str(e)}")
        raise

if __name__ == "__main__":
    save_model()