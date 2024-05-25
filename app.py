import streamlit as st
from gtts import gTTS
import os

def text_to_speech(text, filename):
    tts = gTTS(text=text, lang='en')
    tts.save(filename)
    return filename

st.title("Convert & Download Text to Speech in .mp3")

text = st.text_area("Enter the text you want to convert to speech:")

if st.button("Convert to Speech"):
    if text:
        filename = "output.mp3"
        file_path = text_to_speech(text, filename)
        st.audio(file_path, format='audio/mp3')
        with open(file_path, "rb") as file:
            btn = st.download_button(
                label="Download MP3",
                data=file,
                file_name=filename,
                mime="audio/mpeg"
            )
    else:
        st.warning("Please enter some text to convert.")
