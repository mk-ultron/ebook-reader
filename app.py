from gtts import gTTS

def text_to_speech(text, filename):
    tts = gTTS(text=text, lang='en')
    tts.save(filename)
    print(f"Saved {filename}")

if __name__ == "__main__":
    text = """
    In a galaxy torn apart by war, a humble mechanic named Kira discovers a dying prince and a secret that could unite the warring factions against an ancient, unstoppable force. Embark on an interstellar journey of courage and hope as Kira rises to become the hero the galaxy never expected.
    """
    filename = "story.mp3"
    text_to_speech(text, filename)

