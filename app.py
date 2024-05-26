import streamlit as st
from gtts import gTTS
import os

def text_to_speech(text, filename):
    # Initialize the gTTS object with the provided text and language
    tts = gTTS(text=text, lang='en')
    # Save the generated speech to a file
    tts.save(filename)
    return filename

# Set the title of the Streamlit app
st.title("Convert & Download Text to Speech in .mp3")

# Text area for user input
text = st.text_area("Enter the text you want to convert to speech:")

# Check if the "Convert to Speech" button is clicked
if st.button("Convert to Speech"):
    if text:
        # If text is provided, convert it to speech and save it as an mp3 file
        filename = "output.mp3"
        file_path = text_to_speech(text, filename)
        # Display the audio player with the generated mp3 file
        st.audio(file_path, format='audio/mp3')
        # Provide a download button for the mp3 file
        with open(file_path, "rb") as file:
            btn = st.download_button(
                label="Download MP3",  # Label for the download button
                data=file,             # Data to be downloaded
                file_name=filename,    # Name of the file to be downloaded
                mime="audio/mpeg"      # MIME type for the file
            )
    else:
        # Show a warning if no text is entered
        st.warning("Please enter some text to convert.")
